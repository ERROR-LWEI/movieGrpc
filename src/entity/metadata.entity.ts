import { Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Entity } from "typeorm";

@Entity()
export class Metadata {

    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id: BigInt

    @Column({
        type: 'varchar',
        length: '50',
        nullable: false,
    })
    value: string

    @Column({
        type: 'varchar',
        length: '50',
        nullable: false,
    })
    name: string

    @Column({
        type: 'varchar',
        length: '50',
        nullable: false,
    })
    enumName: string

    @Column({
        type: 'bigint',
        default: 0,
    })
    parentId: BigInt


    @Column({
        type: 'varchar',
        length: '20',
        default: '0'
    })
    del: string

    @CreateDateColumn()
    createDate: DateConstructor

    @UpdateDateColumn()
    updateDate: DateConstructor
}