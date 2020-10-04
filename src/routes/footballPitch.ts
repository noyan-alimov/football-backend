import { Request, Response } from "express";
import { app, jwtCheck } from "..";
import { addFootballPitch } from "../controllers/footballPitch/addFootballPitch";
import { deleteFootballPitch } from "../controllers/footballPitch/deleteFootballPitch";
import { getAllFootballPitches } from "../controllers/footballPitch/getAllFootballPitches";
import { getFootballPitch } from "../controllers/footballPitch/getFootballPitch";
import { updateFootballPitch } from "../controllers/footballPitch/updateFootballPitch";

export const footballPitchRoute = () => {
    app.post('/api/football-pitch', jwtCheck, (req: Request, res: Response) => {
        addFootballPitch(req, res);
    });

    app.get('/api/football-pitches', (req: Request, res: Response) => {
        getAllFootballPitches(req, res);
    });

    app.get('/api/football-pitch/:id', (req: Request, res: Response) => {
        getFootballPitch(req, res);
    });

    app.put('/api/football-pitch/:id', jwtCheck, (req: Request, res: Response) => {
        updateFootballPitch(req, res);
    });

    app.delete('/api/football-pitch/:id', jwtCheck, (req: Request, res: Response) => {
        deleteFootballPitch(req, res);
    });
}