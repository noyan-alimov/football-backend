import { createConnection } from "typeorm";
import { FootballPitch } from './entities/FootballPitch';
import { Datee } from './entities/Datee';
import { HourlyTime } from './entities/HourlyTime';
import dotenv = require('dotenv');
dotenv.config();

let database: string;

if (process.env.NODE_ENV === 'test') {
    database = 'footballtest'
} else {
    database = `${process.env.DB_NAME}`
}

export const connectionToDB = createConnection({
    type: "postgres",
    host: `${process.env.DB_HOST}`,
    port: 5432,
    username: `${process.env.DB_USERNAME}`,
    password: `${process.env.DB_PASSWORD}`,
    database,
    entities: [
        FootballPitch,
        Datee,
        HourlyTime
    ],
    synchronize: true
});