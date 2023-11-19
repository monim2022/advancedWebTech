import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm";

@Entity('viewLibrary')
export class viewLibrary extends BaseEntity {
    @PrimaryGeneratedColumn({
        comment: 'The library view unique identifier',
    })
    TotalBooks: Number;

    @Column({
        type: 'varchar',
    })
    BookTitle: string;

    @Column({
        type: 'varchar',
    })
    GroupWiseBook: string;

    
}
