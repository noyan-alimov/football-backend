import { Request, Response } from "express";
import { unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { FootballPitch } from '../../entities/FootballPitch';

export const getFootballPitch = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const footballPitchId = req.params.id;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitch = await footballPitchRepository.findOne(footballPitchId);

        if (!footballPitch) {
            unsuccessfulResponse(res, 404, 'football pitch not found');
        }

        res.status(200).json({ success: true, footballPitch });
    }).catch(error => {
        console.log('Error getting a football pitch', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}