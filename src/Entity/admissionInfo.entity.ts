import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('admissionInfo')
export class admissionInfo extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The admission id unique identifier'
    })
    id: number;
    @Column({
        type: "varchar",
    })
    AdmissionStart: string;
    @Column({
        type: "varchar",
    })
    AdmissionEnd: string;

    @Column({
        type: "varchar",
    })
    classStart: string;
    @Column({
        type: "varchar",
    })
    Programm: string;
    @Column({
        type: "varchar",
    })
    ApplyFee: string;
    @Column({
        type: "varchar",
    })
    AdmissionPolicy: string;


}