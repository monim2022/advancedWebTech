import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('alumniInfo')
export class alumniInfo extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The alumni Info unique identifier'
    })
    alumniID: number;

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
    job: string;

    @Column({
        type: 'varchar',
    })
    achievment:string;

}
