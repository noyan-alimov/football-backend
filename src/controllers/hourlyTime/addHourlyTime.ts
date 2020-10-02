import { Request, Response } from "express";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";
import { HourlyTime } from "../../entities/HourlyTime";

export const addHourlyTime = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let hourlyTime = new HourlyTime();
        hourlyTime.time = req.body.time;
        
        const dateId = req.body.dateId;
        let dateRepository = connection.getRepository(Datee);
        let date = await dateRepository.findOne({ id: dateId });

        if (!date) {
            res.status(404).json({ success: false, message: 'date not found' });
        } else {
            hourlyTime.date = date;
        }

        let hourlyTimeRepository = connection.getRepository(HourlyTime);
        await hourlyTimeRepository.save(hourlyTime);

        res.status(201).json({ success: true, hourlyTime });
    }).catch(error => {
        console.log('Error adding hourly time', error);
        res.status(500).json({ success: false, message: 'internal server error' });
    })
}