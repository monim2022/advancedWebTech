import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('awardInfo')
export class awardInfo extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The award info unique identifier',
    })
    id: number;

    @Column({
        type: 'integer',
    })
    TotalAward: Number;

    @Column({
        type: 'integer',
    })
    AwardListNumber: Number;

    @Column({
        type: 'varchar', 
    })
    AwardName: string;

    @Column({
        type: 'varchar', 
    })
    Description: string;

    @Column({
        type: 'varchar', 
    })
    AwardDate: Date;

    
}