import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
class Artist {

    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: BigInt;

    @Column({ type: 'varchar', default: '' })
    name: string;

    @Column({ type: 'varchar', default: '' })
    img: string;

    @Column({ type: 'varchar', default: '' })
    birthday: string;
}