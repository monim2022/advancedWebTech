import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('careerInfo')
export class careerInfo extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The career info unique identifier',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    vaccancy: string;

    @Column({
        type: 'varchar', 
    })
    totalVaccancy: number;

    @Column({
        type: 'varchar', 
    })
    position: string;

    @Column({
        type: 'varchar', 
    })
    salary: number;

    @Column({
        type: 'varchar', 
    })
    jobDescription: string;

   
}