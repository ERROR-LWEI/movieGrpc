import { Entity, ObjectIdColumn, ObjectID, Column, CreateDateColumn } from "typeorm";



@Entity()
export class Loggers {

    @ObjectIdColumn()
    id: ObjectID

    /** 服务信息 **/
    @Column({ type: 'string', nullable: false })
    service: string

    /** 调用参数 **/
    @Column({ type: 'string', nullable: false })
    params: string
    
    /** 异常信息 **/
    @Column({ type: 'string' })
    message: string

    /** 异常级别 **/
    @Column({ type: 'string', nullable: false })
    level: string

    /** 异常时间 **/
    @CreateDateColumn()
    createDate: DateConstructor
}