import { Module, Global } from '@nestjs/common';
import { MLogger } from '../mlogger/mlogger.service';
import LoggersToken from '../mongodb/providers/logger.providers';

@Global()
@Module({
    providers: [LoggersToken, MLogger],
    exports: [MLogger],
})
export class MloggerModule {}
