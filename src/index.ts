import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from "express";
import * as cors from 'cors';
import { footballPitchRoute } from './routes/footballPitch';
import { dateRoute } from './routes/date';
import { hourlyTimeRoute } from './routes/hourlyTime';

export const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({ success: true });
});

footballPitchRoute();
dateRoute();
hourlyTimeRoute();

const port: number = 8000;

if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}
