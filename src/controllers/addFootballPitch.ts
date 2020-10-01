import { Request, Response } from "express";
import { connectionToDB } from "../connectionToDB";
import { FootballPitch } from '../entities/FootballPitch';
import { Datee } from '../entities/Datee';

export const addFootballPitch = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let date1 = new Datee();
        date1.date = req.body.dates[0];
        let date1Repository = connection.getRepository(Datee);
        await date1Repository.save(date1);

        let date2 = new Datee();
        date2.date = req.body.dates[1];
        let date2Repository = connection.getRepository(Datee);
        await date2Repository.save(date2);

        let footballPitch = new FootballPitch();
        footballPitch.name = req.body.name;
        footballPitch.address = req.body.address;
        footballPitch.contactNumber = req.body.contactNumber;
        footballPitch.pricePerHourInKzt = req.body.pricePerHourInKzt;
        footballPitch.dates = [date1, date2];
        let footballPitchRepository = connection.getRepository(FootballPitch);
        await footballPitchRepository.save(footballPitch);

        res.status(201).json({
            success: true,
            footballPitch
        });
    }).catch(error => {
        console.log('Error adding football pitch, something is wrong with the database', error);
        res.status(500).json({
            success: false,
        })
    })
}