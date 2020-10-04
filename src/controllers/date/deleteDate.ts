import { Request, Response } from "express";
import { successfulResponse, unsuccessfulResponse } from "../../apiResponses";
import { connectionToDB } from "../../connectionToDB";
import { Datee } from "../../entities/Datee";

export const deleteDate = (req: Request, res: Response) => {
    connectionToDB.then(async connection => {
        const dateId = req.params.id;
        const userId = req.body.userId;
        const dateRepository = connection.getRepository(Datee);
        let date = await dateRepository.findOne(dateId);
        
        if (!date) {
            unsuccessfulResponse(res, 404, 'date not found');
            return
        }

        if (date.userId !== userId) {
            unsuccessfulResponse(res, 403, 'you are not authorized to delete this date');
            return
        }
        
        await dateRepository.remove(date);

        successfulResponse(res, 200, dateId);
    }).catch(error => {
        console.log('Error deleting date', error);
        unsuccessfulResponse(res, 500, 'internal server error');
    })
}