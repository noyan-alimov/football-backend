import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from "express";
import * as cors from 'cors';
import jwt = require('express-jwt');
import jwks = require('jwks-rsa');

import { footballPitchRoute } from './routes/footballPitch';
import { dateRoute } from './routes/date';
import { hourlyTimeRoute } from './routes/hourlyTime';

export const app = express();

app.use(express.json());
app.use(cors());

export const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://football-booking.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://quickstarts/api',
  issuer: 'https://football-booking.eu.auth0.com/',
  algorithms: ['RS256']
});

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
