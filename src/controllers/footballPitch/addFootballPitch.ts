import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { FootballPitch } from '../../entities/FootballPitch';

export const addFootballPitch = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let footballPitch = new FootballPitch();
        footballPitch.userId = req.body.userId;
        footballPitch.name = req.body.name;
        footballPitch.address = req.body.address;
        footballPitch.contactNumber = req.body.contactNumber;
        footballPitch.pricePerHour = req.body.pricePerHour;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        await footballPitchRepository.save(footballPitch);

        successfulResponse(res, 201, footballPitch);
    }).catch(error => {
        console.log('Error adding football pitch, something is wrong with the database', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}