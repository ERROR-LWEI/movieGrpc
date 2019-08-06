require('dotenv').config({
  path: require('path').resolve(process.cwd(), 'test.env')
});

import { Test, TestingModule } from '@nestjs/testing';
import { FigureService } from './figure.service';
import { FigureController } from './figure.controller';
import { AppModule } from '../app.module';
import { FigureModule } from './figure.module';

describe('Figure Controller', () => {
  let controller: FigureController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, FigureModule],
      controllers: [FigureController],
      providers: [FigureService]
    }).compile();

    controller = module.get<FigureController>(FigureController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
