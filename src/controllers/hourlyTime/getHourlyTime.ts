import { Request, Response } from "express";
import { unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { HourlyTime } from "../../entities/HourlyTime";

export const getAllHourlyTimes = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const hourlyTimeId = req.params.id;
        let hourlyTimeRepository = connection.getRepository(HourlyTime);
        let hourlyTime = await hourlyTimeRepository.findOne(hourlyTimeId);

        if (!hourlyTime) {
            unsuccessfulResponse(res, 404, 'hourly time not found');
        }

        res.status(200).json({ success: true, hourlyTime });
    }).catch(error => {
        console.log('Error getting an hourly time', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}