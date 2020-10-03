import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";
import { FootballPitch } from '../../entities/FootballPitch';
import { HourlyTime } from "../../entities/HourlyTime";

export const deleteFootballPitch = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const footballPitchId = req.params.id;
        const userId = req.body.id;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitch = await footballPitchRepository.findOne(footballPitchId);

        if (!footballPitch) {
            unsuccessfulResponse(res, 404, 'football pitch not found');
        }

        if (footballPitch.userId !== userId) {
            unsuccessfulResponse(res, 403, 'you are unauthorized to delete this football Pitch');
        }

        let dateRepository = connection.getRepository(Datee);
        let hourlyTimeRepository = connection.getRepository(HourlyTime);

        let dates = await dateRepository.find({ footballPitch });
        dates.forEach(async date => {
            await hourlyTimeRepository.delete({ date });
        })

        await dateRepository.delete({ footballPitch });
        await footballPitchRepository.remove(footballPitch);

        successfulResponse(res, 200, footballPitchId);
    }).catch(error => {
        console.log('Error deleting a football pitch', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}