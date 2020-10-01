import { Request, Response } from "express";
import { connectionToDB } from "../connectionToDB";
import { FootballPitch } from '../entities/FootballPitch';

export const addFootballPitch = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let footballPitch = new FootballPitch();
        footballPitch.name = req.body.name;
        footballPitch.address = req.body.address;
        footballPitch.contactNumber = req.body.contactNumber;
        footballPitch.pricePerHourInKzt = req.body.pricePerHourInKzt;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        await footballPitchRepository.save(footballPitch);

        res.status(201).json({ success: true, footballPitch });
    }).catch(error => {
        console.log('Error adding football pitch, something is wrong with the database', error);
        res.status(500).json({ success: false, message: 'internal server error' });
    })
}