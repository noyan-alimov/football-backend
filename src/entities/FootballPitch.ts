import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Datee } from "./Datee";

@Entity()
export class FootballPitch {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    contactNumber: string;

    @Column()
    pricePerHourInKzt: number;

    @OneToMany(type => Datee, date => date.footballPitch, {
        nullable: true
    })
    dates: Datee[];
}