import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from "express";
import * as cors from 'cors';
import { addFootballPitch } from './controllers/addFootballPitch';
import { addDate } from './controllers/addDate';
import { addHourlyTime } from './controllers/addHourlyTime';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({ success: true })
});

app.post('/api/add-football-pitch', (req: Request, res: Response) => {
    addFootballPitch(req, res);
});

app.post('/api/add-date', (req: Request, res: Response) => {
    addDate(req, res);
});

app.post('/api/add-hourly-time', (req: Request, res: Response) => {
    addHourlyTime(req, res);
})

const port: number = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});