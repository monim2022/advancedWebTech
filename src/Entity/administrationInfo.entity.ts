import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('administrationInfo')
export class administrationInfo extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The administrator Info unique identifier'
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    Name: string;

    @Column({
        type: 'varchar',
    })
    Email: string;

    @Column({
        type: 'varchar', 
    })
    Contact: string; 

    @Column({
        type: 'varchar', 
    })
    Address: string;

    @Column({
        type: 'varchar',
    })
    Position: string;

    @Column({
        type: 'varchar',
    })
    Degree: string;

    @Column({
        type: 'varchar'
    })
    Award: string;
}
