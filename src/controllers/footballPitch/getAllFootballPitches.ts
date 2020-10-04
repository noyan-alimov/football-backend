import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { FootballPitch } from '../../entities/FootballPitch';

export const getAllFootballPitches = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitches = await footballPitchRepository.find();
        successfulResponse(res, 200, footballPitches);
    }).catch(error => {
        console.log('Error getting all football pitches', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}