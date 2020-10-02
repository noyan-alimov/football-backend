import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from "express";
import * as cors from 'cors';
import { addFootballPitchRoute } from './routes/footballPitch';
import { addDateRoute } from './routes/date';
import { addHourlyTimeRoute } from './routes/hourlyTime';

export const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({ success: true });
});

addFootballPitchRoute();
addDateRoute();
addHourlyTimeRoute();

const port: number = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});