import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('academicCalender')
export class academicCalender extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The academic Calender unique identifier'
    })
    id: number;
    @Column(
        {type:'varchar',}
    )
    TitleOfCalender: string;

    @Column({
        type: 'integer',
    })
    totalWeek: number;

    @Column({
        type: 'varchar', 
    })
    Month: string;

    @Column({
        type: 'varchar', 
    })
    Day: string;

    @Column({
        type: 'varchar'
    })
    Description: string;
}
