import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('apply')
export class apply extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The apply unique identifier',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    studentFirstName: string;

    @Column({
        type: 'varchar', 
    })
    studentLastName: string;

    @Column({
        type: 'varchar', 
    })
    studentContactNumber: string;

    @Column({
        type: 'varchar', 
    })
    parentsContactNumber: string;

    @Column({
        type: 'varchar', 
    })
    studentEmail: string;

    @Column({
        type: 'varchar', 
    })
    parentsEmail: string;

    @Column({
        type: 'varchar', 
    })
    presentAddress: string;

    @Column({
        type: 'varchar', 
    })
    parmanentAddress: string;

    @Column({
        type: 'varchar', 
    })
    gender: string;

    @Column({
        type: 'varchar', 
    })
    religion: string;

    @Column({
        type: 'date', 
    })
    dateOfBirth: string;

    @Column({
        type: 'varchar', 
    })
    emergencyContact: string;

    @Column({
        type: 'varchar', 
    })
    primarySchoolName: string;

    @Column({
        type: 'varchar', 
    })
    gpa: string;
}