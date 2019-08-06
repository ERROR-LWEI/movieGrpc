import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AdminModule } from './admin/admin.module';
import { MloggerModule } from './mlogger/mlogger.module';
import { MongodbModule } from './mongodb/mongodb.module';
import { MovieModule } from './movie/movie.module';
import { ScheduleModule } from 'nest-schedule';
import { FigureModule } from './figure/figure.module';
import { MetadataModule } from './metadata/metadata.module';
import ScheduleService from './task/datasync';
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD } = process.env;

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: DB_HOST,
      port: Number(DB_PORT),
      username: DB_USERNAME,
      password: DB_PASSWORD,
      database: DB_DATABASE,
      entities: [__dirname + '/entity/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MongodbModule,
    AdminModule,
    MloggerModule,
    MovieModule,
    FigureModule,
    MetadataModule
  ],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
