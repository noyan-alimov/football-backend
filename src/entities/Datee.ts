import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from "typeorm";
import { FootballPitch } from "./FootballPitch";
import { HourlyTime } from "./HourlyTime";

@Entity()
export class Datee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string

    @ManyToOne(type => FootballPitch, footballPitch => footballPitch.dates)
    footballPitch: FootballPitch;

    @OneToMany(type => HourlyTime, hourlyTime => hourlyTime.date)
    hourlyTimes: HourlyTime[];
}