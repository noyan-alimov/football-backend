import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

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

    @Column()
    dates: string[]
}