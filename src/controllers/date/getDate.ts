import { Request, Response } from "express";
import { unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";

export const getDate = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const dateId = req.params.id;
        let dateRepository = connection.getRepository(Datee);
        let date = await dateRepository.findOne(dateId);
        res.status(200).json({ success: true, date });
    }).catch(error => {
        console.log('Error getting one date', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}