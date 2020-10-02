import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { FootballPitch } from '../../entities/FootballPitch';

export const deleteFootballPitch = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const footballPitchId = req.params.id;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitch = await footballPitchRepository.findOne(footballPitchId);

        if (!footballPitch) {
            unsuccessfulResponse(res, 404, 'football pitch not found');
        }

        await footballPitchRepository.remove(footballPitch);

        successfulResponse(res, 200, footballPitchId);
    }).catch(error => {
        console.log('Error deleting a football pitch', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}