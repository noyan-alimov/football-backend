import { Request, Response } from "express";
import { app, jwtCheck } from "..";
import { addFootballPitch } from "../controllers/footballPitch/addFootballPitch";
import { deleteFootballPitch } from "../controllers/footballPitch/deleteFootballPitch";
import { getAllFootballPitches } from "../controllers/footballPitch/getAllFootballPitches";
import { getFootballPitch } from "../controllers/footballPitch/getFootballPitch";
import { getFootballPitchesByUserId } from "../controllers/footballPitch/getFootballPitchesByUserId";
import { updateFootballPitch } from "../controllers/footballPitch/updateFootballPitch";

export const footballPitchRoute = () => {
    app.post('/api/footballPitch', jwtCheck, (req: Request, res: Response) => {
        addFootballPitch(req, res);
    });

    app.get('/api/footballPitches', (req: Request, res: Response) => {
        getAllFootballPitches(req, res);
    });

    app.get('/api/footballPitch/:id', (req: Request, res: Response) => {
        getFootballPitch(req, res);
    });

    app.get('/api/users/:userId/footballPitches', (req: Request, res: Response) => {
        getFootballPitchesByUserId(req, res);
    });

    app.put('/api/users/:userId/footballPitch/:id', jwtCheck, (req: Request, res: Response) => {
        updateFootballPitch(req, res);
    });

    app.delete('/api/users/:userId/footballPitch/:id', jwtCheck, (req: Request, res: Response) => {
        deleteFootballPitch(req, res);
    });
}