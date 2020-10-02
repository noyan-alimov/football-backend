import { Request, Response } from "express";
import { app } from "..";
import { addDate } from "../controllers/date/addDate";
import { getAllDates } from "../controllers/date/getAllDates";
import { getDateByFootballPitchId } from "../controllers/date/getDatesByFootballPitchId";

export const dateRoute = () => {
    app.post('/api/date', (req: Request, res: Response) => {
        addDate(req, res);
    });

    app.get('/api/dates', (req: Request, res: Response) => {
        getAllDates(req, res);
    });

    app.get('/api/date/:footballpitchid', (req: Request, res: Response) => {
        getDateByFootballPitchId(req, res);
    });
}
