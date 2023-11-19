import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('sportsInfo')
export class sportsInfo extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The sport info unique identifier',
    })
    footballTitle: string;

    @Column({
        type: 'varchar',
    })

    footballEvents: string;

    @Column({
        type: 'varchar',
    })

    cricketsEvents: string;

    @Column({
        type: 'varchar',
    })
    basketballEvents: string;
    @Column({
        type: 'varchar',
    })
    footballAchievement: string;
    @Column({
        type: 'varchar',
    })
    cricketsAchievement: string;
    @Column({
        type: 'varchar',
    })
    basketballAchievement: string;

     
}