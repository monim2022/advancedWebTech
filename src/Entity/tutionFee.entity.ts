import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('tutionFee')
export class tutionFee extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The tution info unique identifier',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    Installment: string;

    @Column({
        type: 'varchar',
    })
    firstInstallment: string;

    @Column({
        type: 'varchar',
    })
    SecondInstallment: string;

    @PrimaryColumn({
        type: 'int', 
    })
    TotalTutionFee: number;
}
