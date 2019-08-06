import { Module, Global } from '@nestjs/common';
import MongodbToken from './mongodb.providers';

@Global()
@Module({
    providers: [...MongodbToken],
    exports: [...MongodbToken],
})
export class MongodbModule {}
