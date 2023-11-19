import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('viewVideos')
export class viewVideos extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The video view unique identifier',
    })
    id: Number;

    @Column({
        type: 'varchar',
    })
    video: string;

    @Column({
        type: 'varchar',
    })
    videoTitle: string;
    @Column({
        type: 'varchar',
    })
    videoDescription: string;
    @Column({
        type: 'varchar',
    })
    videoDate: Date;


    
}
