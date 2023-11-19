import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('guestUser')
export class guestUser extends BaseEntity
{
    @PrimaryGeneratedColumn({
        comment: 'The guestUser unique identifier'
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    username: string;
  
    @Column({
        type: 'varchar',
    })
    email: string;

    @Column({
        type: 'varchar',
    })
    password: string;

   
}