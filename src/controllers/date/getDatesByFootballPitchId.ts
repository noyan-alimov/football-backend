import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";
import { FootballPitch } from "../../entities/FootballPitch";

export const getDatesByFootballPitchId = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const footballPitchId = req.params.footballPitchId;
        const footballPitchRepository = connection.getRepository(FootballPitch);
        const footballPitch = await footballPitchRepository.findOne(footballPitchId);

        const dateRepository = connection.getRepository(Datee);
        const dates = await dateRepository.find({ footballPitch });

        successfulResponse(res, 200, dates);
    }).catch(error => {
        console.log('Error getting dates by football pitch id', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}