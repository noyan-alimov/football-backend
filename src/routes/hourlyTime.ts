import { Request, Response } from "express";
import { app } from "..";
import { addHourlyTime } from "../controllers/hourlyTime/addHourlyTime";
import { getAllHourlyTimes } from "../controllers/hourlyTime/getAllHourlyTimes";
import { getHourlyTime } from "../controllers/hourlyTime/getHourlyTime";

export const hourlyTimeRoute = () => {
    app.post('/api/hourly-time', (req: Request, res: Response) => {
        addHourlyTime(req, res);
    });

    app.get('/api/hourly-times', (req: Request, res: Response) => {
        getAllHourlyTimes(req, res);
    });

    app.get('/api/hourly-time/:id', (req: Request, res: Response) => {
        getHourlyTime(req, res);
    });
}
