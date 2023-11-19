import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('facilityInfo')
export class facilityInfo extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The facility info unique identifier',
    })
    id: number;

    @Column({
        type: 'varchar',
    })
    TotalScholarship: Number;

    @Column({
        type: 'varchar', 
    })
    academicSholarship: string;

    @Column({
        type: 'varchar', 
    })
    SholarshipRequirements: string;

    @Column({
        type: 'varchar', 
    })
    Description: string;

    
   
}