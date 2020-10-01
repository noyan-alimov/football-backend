import { Request, Response } from "express";
import { connectionToDB } from "../connectionToDB";
import { Datee } from "../entities/Datee";
import { FootballPitch } from '../entities/FootballPitch';
import { HourlyTime } from "../entities/HourlyTime";
import { hourlyTimes } from "../helpers/hourlyTimes";

export const addDateAndHourlyTimes = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let date = new Datee();
        date.date = req.body.date;
        let dateRepository = connection.getRepository(Datee);

        const footballPitchId = req.body.footballPitchId;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitch = await footballPitchRepository.findOne({ id: footballPitchId });
        footballPitch.dates = [...footballPitch.dates, date];
        await footballPitchRepository.save(footballPitch);

        hourlyTimes.forEach(async (time: string) => {
            let hourlyTime = new HourlyTime();
            hourlyTime.time = time;
            let hourlyTimeRepository = connection.getRepository(HourlyTime);
            await hourlyTimeRepository.save(hourlyTime);
            date.hourlyTimes = [...date.hourlyTimes, hourlyTime];
        });

        await dateRepository.save(date);

        res.status(201).json({ success: true, date });
    }).catch(error => {
        console.log('Error adding timetable', error);
        res.status(500).json({ success: false });
    })
}


