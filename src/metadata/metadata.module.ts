import { Module } from '@nestjs/common';
import { MetadataService } from './metadata.service';
import { MetadataController } from './metadata.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Metadata } from './../entity/metadata.entity';


/**
 * 元数据
 *
 * @export
 * @class MetadataModule
 */
@Module({
  imports: [TypeOrmModule.forFeature([
    Metadata
  ])],
  providers: [MetadataService],
  controllers: [MetadataController]
})
export class MetadataModule {}
