import { createConnection } from "typeorm";
import { FootballPitch } from './entities/FootballPitch';
import { Datee } from './entities/Datee';
import { HourlyTime } from './entities/HourlyTime';

export const connectionToDB = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "noyan",
    password: "na040898",
    database: "football",
    entities: [
        FootballPitch,
        Datee,
        HourlyTime
    ],
    synchronize: true
});