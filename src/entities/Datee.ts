import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { FootballPitch } from "./FootballPitch";

@Entity()
export class Datee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @ManyToOne(type => FootballPitch, footballPitch => footballPitch.dates)
    footballPitch: FootballPitch;
}