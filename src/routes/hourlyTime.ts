import { Request, Response } from "express";
import { app } from "..";
import { addHourlyTime } from "../controllers/hourlyTime/addHourlyTime";
import { deleteHourlyTime } from "../controllers/hourlyTime/deleteHourlyTime";
import { getHourlyTimesByDateId } from "../controllers/hourlyTime/getHourlyTimesByDateId";
import { updateHourlyTime } from "../controllers/hourlyTime/updateHourlyTime";

export const hourlyTimeRoute = () => {
    app.post('/api/time', (req: Request, res: Response) => {
        addHourlyTime(req, res);
    });

    app.get('/api/times/:dateId', (req: Request, res: Response) => {
        getHourlyTimesByDateId(req, res);
    });

    app.put('/api/time/:id', (req: Request, res: Response) => {
        updateHourlyTime(req, res);
    });

    app.delete('/api/time/:id', (req: Request, res: Response) => {
        deleteHourlyTime(req, res);
    });
}
