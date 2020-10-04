import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";
import { HourlyTime } from "../../entities/HourlyTime";

export const getHourlyTimesByDateId = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const dateId = req.body.dateId;
        const dateRepository = connection.getRepository(Datee);
        const date = await dateRepository.findOne(dateId);

        const hourlyTimeRepository = connection.getRepository(HourlyTime);
        const hourlyTimes = await hourlyTimeRepository.find({ date });

        successfulResponse(res, 200, hourlyTimes);
    }).catch(error => {
        console.log('Error getting all hourly times', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}