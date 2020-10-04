import { Request, Response } from "express";
import { app, jwtCheck } from "..";
import { addDate } from "../controllers/date/addDate";
import { deleteDate } from "../controllers/date/deleteDate";
import { getAllDates } from "../controllers/date/getAllDates";
import { getDatesByFootballPitchId } from "../controllers/date/getDatesByFootballPitchId";
import { updateDate } from "../controllers/date/updateDate";

export const dateRoute = () => {
    app.post('/api/footballPitch/:footballPitchId/date', jwtCheck, (req: Request, res: Response) => {
        addDate(req, res);
    });

    app.get('/api/dates', (req: Request, res: Response) => {
        getAllDates(req, res);
    });

    app.get('/api/footballPitch/:footballPitchId/dates', (req: Request, res: Response) => {
        getDatesByFootballPitchId(req, res);
    });

    app.put('/api/date/:id', jwtCheck, (req: Request, res: Response) => {
        updateDate(req, res);
    });

    app.delete('/api/date/:id', jwtCheck, (req: Request, res: Response) => {
        deleteDate(req, res);
    });
}
