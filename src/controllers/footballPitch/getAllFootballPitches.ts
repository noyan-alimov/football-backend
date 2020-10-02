import { Request, Response } from "express";
import { connectionToDB } from "../../connectionToDB";
import { FootballPitch } from '../../entities/FootballPitch';

export const getAllFootballPitches = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitches = await footballPitchRepository.find();
        res.status(200).json({ success: true, footballPitches });
    }).catch(error => {
        console.log('Error getting all football pitches', error);
        res.status(500).json({ success: false, message: 'internal server error' });
    })
}