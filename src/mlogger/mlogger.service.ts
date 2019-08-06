import { Logger, Injectable, Inject } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { Loggers } from '../mongodb/entity/logger.entity';

@Injectable()
export class MLogger extends Logger {
    constructor(
        @Inject('LoggersToken')
        private readonly logDB: MongoRepository<Loggers>
    ) {
        super();
    }

    /**
     * 程序错误
     * @param message 
     * @param trace 
     * @param context 
     */
    async error(message: string, trace: string, context: string) {
        super.error(message, trace, context);
        let msg = message.split('-');
        let doc = new Loggers();
        doc.service = context;
        doc.params = msg[0];
        doc.message = msg[1];
        doc.level = 'error';
        await this.logDB.save(doc);
    }
    async log(message: string, trace: string) {
        super.log(message, trace);
    }
    
    /**
     * 应用异常
     * @param  {string} message 
     * @param  {string} trace 
     * @return {void}@memberof MLogger
     */
    async warn(message: string, trace: string) {
        super.warn(message, trace);
        let msg = message.split('-');
        let doc = new Loggers();
        doc.service = trace;
        doc.params = msg[0];
        doc.message = msg[1];
        doc.level = 'warn';
        await this.logDB.save(doc);
    }
    debug(message: string, trace: string) {
        super.debug(message, trace);
    }
}