import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('gellaryView')
export class gellaryView extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The gellary view unique identifier',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    imageTitle: string;
    @Column({
        type: 'varchar', 
    })
     image: string;
    @Column({
        type: 'varchar', 
    })
    imageDescription: string;

    @Column({
        type: 'varchar', 
    })
    imageDate: Date;

    
    
   
}