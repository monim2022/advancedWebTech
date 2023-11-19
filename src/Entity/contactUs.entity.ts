import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('contactUs')
export class contactUs extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The contact info unique identifier',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    email: string;

    @Column({
        type: 'varchar', 
    })
    contact: number;
   
}