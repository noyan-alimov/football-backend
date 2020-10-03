import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { FootballPitch } from '../../entities/FootballPitch';

export const updateFootballPitch = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const footballPitchId = req.params.id;
        const userId = req.body.id;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitch = await footballPitchRepository.findOne(footballPitchId);

        if (!footballPitch) {
            unsuccessfulResponse(res, 404, 'football pitch not found');
        }

        if (footballPitch.userId !== userId) {
            unsuccessfulResponse(res, 403, 'you are unauthorized to update this football Pitch');
        }

        footballPitch.name = req.body.name;
        footballPitch.address = req.body.address;
        footballPitch.contactNumber = req.body.contactNumber;
        footballPitch.pricePerHourInKzt = req.body.pricePerHourInKzt;

        await footballPitchRepository.save(footballPitch);

        successfulResponse(res, 200, footballPitch);
    }).catch(error => {
        console.log('Error getting a football pitch', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}