import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { FootballPitch } from '../../entities/FootballPitch';

export const getFootballPitchesByUserId = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const userId = req.body.userId;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitches = await footballPitchRepository.find({ userId });

        if (!footballPitches) {
            unsuccessfulResponse(res, 404, 'football pitches not found');
            return
        }

        successfulResponse(res, 200, footballPitches);
    }).catch(error => {
        console.log('Error getting a football pitch', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}