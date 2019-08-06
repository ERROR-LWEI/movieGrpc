import { createConnection } from 'typeorm';
const {
    LDB_HOST,
    LDB_PORT,
    LDB_DATABASE,
    LDB_USERNAME,
    LDB_PASSWORD,
} = process.env;

export default [{
    provide: 'MongodbToken',
    useFactory: async () => await createConnection({
        type: 'mongodb',
        host: LDB_HOST,
        port: Number(LDB_PORT),
        database: LDB_DATABASE,
        username: LDB_USERNAME,
        password: LDB_PASSWORD,
        useNewUrlParser: true,
        entities: [__dirname + '/**/*.entity{.ts,.js}']
    })
}]