import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";
import { HourlyTime } from "../../entities/HourlyTime";

export const addHourlyTime = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let hourlyTime = new HourlyTime();
        hourlyTime.time = req.body.time;
        
        const userId = req.body.userId;
        const dateId = req.params.dateId;
        let dateRepository = connection.getRepository(Datee);
        let date = await dateRepository.findOne(dateId);

        if (!date) {
            unsuccessfulResponse(res, 404, 'date not found');
            return
        }

        if (hourlyTime.userId !== userId) {
            unsuccessfulResponse(res, 403, 'you are not authorized to delete this date');
            return
        }
        
        hourlyTime.date = date;

        let hourlyTimeRepository = connection.getRepository(HourlyTime);
        await hourlyTimeRepository.save(hourlyTime);

        successfulResponse(res, 201, hourlyTime);
    }).catch(error => {
        console.log('Error adding hourly time', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}