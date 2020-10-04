import { Request, Response } from "express";
import { app, jwtCheck } from "..";
import { addHourlyTime } from "../controllers/hourlyTime/addHourlyTime";
import { deleteHourlyTime } from "../controllers/hourlyTime/deleteHourlyTime";
import { getHourlyTimesByDateId } from "../controllers/hourlyTime/getHourlyTimesByDateId";
import { updateHourlyTime } from "../controllers/hourlyTime/updateHourlyTime";

export const hourlyTimeRoute = () => {
    app.post('/api/time', jwtCheck, (req: Request, res: Response) => {
        addHourlyTime(req, res);
    });

    app.get('/api/times', (req: Request, res: Response) => {
        getHourlyTimesByDateId(req, res);
    });

    app.put('/api/time/:id', jwtCheck, (req: Request, res: Response) => {
        updateHourlyTime(req, res);
    });

    app.delete('/api/time/:id', jwtCheck, (req: Request, res: Response) => {
        deleteHourlyTime(req, res);
    });
}
