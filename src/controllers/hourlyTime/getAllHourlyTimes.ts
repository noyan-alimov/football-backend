import { Request, Response } from "express";
import { unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { HourlyTime } from "../../entities/HourlyTime";

export const getAllHourlyTimes = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let hourlyTimeRepository = connection.getRepository(HourlyTime);
        let hourlyTimes = await hourlyTimeRepository.find();
        res.status(200).json({ success: true, hourlyTimes });
    }).catch(error => {
        console.log('Error getting all hourly times', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}