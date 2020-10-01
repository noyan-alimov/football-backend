import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Datee } from "./Datee";

@Entity()
export class HourlyTime {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        default: false
    })
    booked: boolean;

    @Column()
    time: string;

    @ManyToOne(type => Datee, datee => datee.hourlyTimes)
    date: Datee;
}