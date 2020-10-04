import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";
import { FootballPitch } from '../../entities/FootballPitch';

export const addDate = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let date = new Datee();
        date.userId = req.body.userId;
        date.date = req.body.date;

        const footballPitchId = req.body.footballPitchId;
        let footballPitchRepository = connection.getRepository(FootballPitch);
        let footballPitch = await footballPitchRepository.findOne(footballPitchId);

        if (!footballPitch) {
            unsuccessfulResponse(res, 404, 'football pitch not found');
            return
        }
        
        date.footballPitch = footballPitch;

        let dateRepository = connection.getRepository(Datee);
        await dateRepository.save(date);

        successfulResponse(res, 201, date);
    }).catch(error => {
        console.log('Error adding timetable', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}


