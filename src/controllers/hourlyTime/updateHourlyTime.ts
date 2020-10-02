import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { HourlyTime } from "../../entities/HourlyTime";

export const updateHourlyTime = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const hourlyTimeId = req.params.id;
        const hourlyTimeRepository = connection.getRepository(HourlyTime);
        let hourlyTime = await hourlyTimeRepository.findOne(hourlyTimeId);

        if (!hourlyTime) {
            unsuccessfulResponse(res, 404, 'time not found');
        }

        hourlyTime.time = req.body.time;
        hourlyTime.booked = req.body.booked;
        await hourlyTimeRepository.save(hourlyTime);
        
        successfulResponse(res, 200, hourlyTime);
    }).catch(error => {
        console.log('Error updating hourly time', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}