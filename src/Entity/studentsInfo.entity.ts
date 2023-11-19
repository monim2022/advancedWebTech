import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('studentsInfo')
export class studentsInfo extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The studentsInfo unique identifier'
    })
    studentID: number;

    @Column({
        type: 'varchar', 
    })
    studentName: string;

    @Column({
        type: 'varchar',
    })
    studentGroup: string;

    @Column({
        type: 'decimal', 
    })
    studentGpa: number;
}
