require('dotenv').config({
  path: require('path').resolve(process.cwd(), 'test.env')
});

import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { AppModule } from '../app.module';
import { MovieModule } from './movie.module';

describe('Movie Controller', () => {
  let controller: MovieController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, MovieModule],
      controllers: [MovieController],
      providers: [MovieService]
    }).compile();

    controller = module.get<MovieController>(MovieController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
