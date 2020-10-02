import { Request, Response } from "express";
import { app } from "..";
import { addDate } from "../controllers/date/addDate";
import { deleteDate } from "../controllers/date/deleteDate";
import { getAllDates } from "../controllers/date/getAllDates";
import { getDatesByFootballPitchId } from "../controllers/date/getDatesByFootballPitchId";
import { updateDate } from "../controllers/date/updateDate";

export const dateRoute = () => {
    app.post('/api/date/:footballpitchid', (req: Request, res: Response) => {
        addDate(req, res);
    });

    app.get('/api/dates', (req: Request, res: Response) => {
        getAllDates(req, res);
    });

    app.get('/api/date/:footballpitchid', (req: Request, res: Response) => {
        getDatesByFootballPitchId(req, res);
    });

    app.put('/api/date/:id', (req: Request, res: Response) => {
        updateDate(req, res);
    });

    app.delete('/api/date/:id', (req: Request, res: Response) => {
        deleteDate(req, res);
    });
}
