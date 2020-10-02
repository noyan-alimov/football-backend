import { Request, Response } from "express";
import { app } from "..";
import { addDate } from "../controllers/date/addDate";
import { getAllDates } from "../controllers/date/getAllDates";
import { getDate } from "../controllers/date/getDate";

export const dateRoute = () => {
    app.post('/api/date', (req: Request, res: Response) => {
        addDate(req, res);
    });

    app.get('/api/dates', (req: Request, res: Response) => {
        getAllDates(req, res);
    });

    app.get('/api/date/:id', (req: Request, res: Response) => {
        getDate(req, res);
    });
}
