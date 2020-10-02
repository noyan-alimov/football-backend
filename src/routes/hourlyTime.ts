import { Request, Response } from "express";
import { app } from "..";
import { addHourlyTime } from "../controllers/hourlyTime/addHourlyTime";

export const addHourlyTimeRoute = () => {
    app.post('/api/hourly-time', (req: Request, res: Response) => {
        addHourlyTime(req, res);
    })
}
