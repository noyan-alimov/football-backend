import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";
import { FootballPitch } from "../../entities/FootballPitch";

export const updateDate = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const dateId = req.params.id;
    }).catch(error => {
        console.log('Error updating date', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}