import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('research')
export class research extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The research unique identifier',
    })
    TotalPublication: Number;

    @Column({
        type: 'varchar',
    })

    publisherName: string;

    @Column({
        type: 'varchar',
    })

    journalName: string;
     
}