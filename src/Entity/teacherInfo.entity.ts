import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('teacherInfo')
export class teacherInfo extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The teacherInfo unique identifier'
    })
    teacherID: number;

    @Column({
        type: 'varchar',
    })

    name: string;

    @Column({
        type: 'varchar',
    })

    email: string;

    @Column({
        type: 'varchar', 
    })
    
    contact: string; 

    @Column({
        type: 'varchar', 
    })
    address: string;

    @Column({
        type: 'varchar',
    })
    position: string;
}
