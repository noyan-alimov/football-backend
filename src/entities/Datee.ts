import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { HourlyTime } from "./HourlyTime";

@Entity()
export class Datee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    footballPitchId: number;

    @OneToMany(type => HourlyTime, hourlyTime => hourlyTime.date)
    hourlyTimes: HourlyTime[];
}