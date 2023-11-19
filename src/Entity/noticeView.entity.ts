import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('noticeView')
export class noticeView extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The notice view unique identifier',
    })
    noticeNumber: number;

    @Column({
        type: 'varchar',
    })
    noticeTitle: string;
    @Column({
        type: 'varchar',
    })
    notice: string;
    @Column({
        type: 'varchar',
    })
    noticeDate: Date;



   
}