import { Module } from '@nestjs/common';
import { FigureService } from './figure.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Figure } from './../entity/figure.entity';
import { FigureController } from './figure.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Figure
    ])
  ],
  providers: [FigureService],
  controllers: [FigureController]
})
export class FigureModule {}
