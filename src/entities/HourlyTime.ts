import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Datee } from "./Datee";

@Entity()
export class HourlyTime {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    booked: boolean;

    @ManyToOne(type => Datee, datee => datee.hourlyTimes)
    date: Datee;
}