import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";

export const getAllDates = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        let dateRepository = connection.getRepository(Datee);
        let dates = await dateRepository.find();
        successfulResponse(res, 200, dates);
    }).catch(error => {
        console.log('Error getting all dates', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}