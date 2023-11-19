import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('rules')
export class rules extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The rules unique identifier',
    })
    schoolUniform: string;

    @Column({
        type: 'varchar',
    })

    schoolEntryTime: number;

    @Column({
        type: 'varchar',
    })

    schoolNotAllow: string;

    @Column({
        type: 'varchar',
    })
    getharingJustice: string;

     
}