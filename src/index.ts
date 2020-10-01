import 'reflect-metadata';
import * as express from 'express';
import { Request, Response } from "express";
import * as cors from 'cors';
import { connectionToDB } from "./connectionToDB";
import { FootballPitch } from './entities/FootballPitch';
import { Datee } from './entities/Datee';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.json({ success: true })
});

app.post('/api/add-football-pitch', (req: Request, res: Response) => {
    try {
        connectionToDB.then(async connection => {
            let date1 = new Datee();
            date1.date = req.body.dates[0];
            let date1Repository = connection.getRepository(Datee);
            await date1Repository.save(date1);
    
            let date2 = new Datee();
            date2.date = req.body.dates[1];
            let date2Repository = connection.getRepository(Datee);
            await date2Repository.save(date2);
    
            let footballPitch = new FootballPitch();
            footballPitch.name = req.body.name;
            footballPitch.address = req.body.address;
            footballPitch.contactNumber = req.body.contactNumber;
            footballPitch.pricePerHourInKzt = req.body.pricePerHourInKzt;
            footballPitch.dates = [date1, date2];
            let footballPitchRepository = connection.getRepository(FootballPitch);
            await footballPitchRepository.save(footballPitch);

            res.status(201).json({
                success: true,
                footballPitch
            });
        });
    } catch (error) {
        console.log('Error with adding football pitch: ', error);
        res.json({
            success: false
        });
    }
});

const port: number = 8000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});










// import { connectionToDB } from "./connectionToDB";
// import { Datee } from "./entities/Datee";
// import { FootballPitch } from "./entities/FootballPitch";


// connectionToDB.then(async connection => {
//     let date1 = new Datee();
//     date1.date = '20-09-2020';
//     let date1Repository = connection.getRepository(Datee);
//     await date1Repository.save(date1);

//     let date2 = new Datee();
//     date2.date = '11-10-2020';
//     let date2Repository = connection.getRepository(Datee);
//     await date2Repository.save(date2);

//     let footballPitch = new FootballPitch();
//     footballPitch.name = 'Old Trafford';
//     footballPitch.address = 'Manchester';
//     footballPitch.contactNumber = '+44 7748 999 787';
//     footballPitch.pricePerHourInKzt = 10000;
//     footballPitch.dates = [date1, date2];
//     let footballPitchRepository = connection.getRepository(FootballPitch);
//     await footballPitchRepository.save(footballPitch);
// })