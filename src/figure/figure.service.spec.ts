require('dotenv').config({
  path: require('path').resolve(process.cwd(), 'test.env')
});

import { Test, TestingModule } from '@nestjs/testing';
import { FigureService } from './figure.service';
import { AppModule } from '../app.module';
import { FigureModule } from './figure.module';

describe('FigureService', () => {
  let service: FigureService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, FigureModule],
      providers: [FigureService],
    }).compile();

    service = module.get<FigureService>(FigureService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
