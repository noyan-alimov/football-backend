import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Datee } from "./Datee";

@Entity()
export class FootballPitch {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: number;

    @Column()
    name: string;

    @Column()
    address: string;

    @Column()
    contactNumber: string;

    @Column()
    pricePerHour: number;

    @OneToMany(type => Datee, date => date.footballPitch, {
        nullable: true
    })
    dates: Datee[];
}