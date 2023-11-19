import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('messageSend')
export class messageSend extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The message view unique identifier',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    message: string;

   
}