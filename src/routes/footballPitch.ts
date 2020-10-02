import { Request, Response } from "express";
import { app } from "..";
import { addFootballPitch } from "../controllers/footballPitch/addFootballPitch";
import { getAllFootballPitches } from "../controllers/footballPitch/getAllFootballPitches";
import { getFootballPitch } from "../controllers/footballPitch/getFootballPitch";

export const footballPitchRoute = () => {
    app.post('/api/football-pitch', (req: Request, res: Response) => {
        addFootballPitch(req, res);
    });

    app.get('/api/football-pitches', (req: Request, res: Response) => {
        getAllFootballPitches(req, res);
    });

    app.get('/api/football-pitch/:id', (req: Request, res: Response) => {
        getFootballPitch(req, res);
    });
}