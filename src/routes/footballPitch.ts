import { Request, Response } from "express";
import { app } from "..";
import { addFootballPitch } from "../controllers/footballPitch/addFootballPitch";

export const addFootballPitchRoute = () => {
    app.post('/api/add-football-pitch', (req: Request, res: Response) => {
        addFootballPitch(req, res);
    });
}
