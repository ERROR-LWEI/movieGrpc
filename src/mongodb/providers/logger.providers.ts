import { Connection } from "typeorm";
import { Loggers } from '../entity/logger.entity';

export default {
    provide: 'LoggersToken',
    useFactory: (connection: Connection) => connection.getMongoRepository(Loggers),
    inject: ['MongodbToken'],
}