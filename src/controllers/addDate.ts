import { Request, Response } from "express";
import { connectionToDB } from "../connectionToDB";
import { Datee } from "../entities/Datee";
import { FootballPitch } from '../entities/FootballPitch';

export const addDate = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let date = new Datee();
        date.date = req.body.date;
        let dateRepository = connection.getRepository(Datee);
        await dateRepository.save(date);

        const footballPitchId = req.body.footballPitchId;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitch = await footballPitchRepository.findOne({ id: footballPitchId });
        console.log(footballPitch);
        console.log(footballPitch.dates);
        footballPitch.dates = [...footballPitch.dates, date];
        await footballPitchRepository.save(footballPitch);

        res.status(201).json({ success: true, date, footballPitch });
    }).catch(error => {
        console.log('Error adding timetable', error);
        res.status(500).json({ success: false });
    })
}


