import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { FootballPitch } from "./FootballPitch";
import { HourlyTime } from "./HourlyTime";

@Entity()
export class Datee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    date: string;

    @ManyToOne(type => FootballPitch, footballPitch => footballPitch.dates)
    footballPitch: FootballPitch;

    @OneToMany(type => HourlyTime, hourlyTime => hourlyTime.date)
    hourlyTimes: HourlyTime[];
}