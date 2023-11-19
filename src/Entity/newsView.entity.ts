import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('newsView')
export class newsView extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The news view unique identifier',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    newsTitle: string;
    @Column({
        type: 'varchar',
    })
    news: string;

    @Column({
        type: 'varchar',
    })
    newsDate: Date;




   
}