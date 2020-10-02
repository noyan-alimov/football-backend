import { Request, Response } from "express";
import { app } from "..";
import { addDate } from "../controllers/date/addDate";

export const addDateRoute = () => {
    app.post('/api/date', (req: Request, res: Response) => {
        addDate(req, res);
    });
}
