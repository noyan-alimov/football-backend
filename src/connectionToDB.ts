import { createConnection } from "typeorm";
import { FootballPitch } from './entities/FootballPitch';
import { Datee } from './entities/Datee';
import { HourlyTime } from './entities/HourlyTime';
import dotenv = require('dotenv');
dotenv.config();

let database: string, host: string, username: string, password: string;

if (process.env.NODE_ENV === 'test') {
    database = 'footballtest'
    host = 'localhost'
    username = 'noyan'
    password = 'na040898'
} else if (process.env.NODE_ENV === 'development') {
    database = 'football'
    host = 'localhost'
    username = 'noyan'
    password = 'na040898'
} else {
    database = `${process.env.DB_NAME}`
    host = `${process.env.DB_HOST}`
    username = `${process.env.DB_USERNAME}`
    password = `${process.env.DB_PASSWORD}`
}

export const connectionToDB = createConnection({
    type: "postgres",
    host,
    port: 5432,
    username,
    password,
    database,
    entities: [
        FootballPitch,
        Datee,
        HourlyTime
    ],
    synchronize: true
});