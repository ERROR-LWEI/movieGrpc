require('dotenv').config({
  path: require('path').resolve(process.cwd(), 'test.env')
});

import { Test, TestingModule } from '@nestjs/testing';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AppModule } from '../app.module';
import { AdminModule } from './admin.module';

describe('Admin Controller', () => {
  let controller: AdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, AdminModule],
      controllers: [AdminController],
      providers: [AdminService]
    }).compile();

    controller = module.get<AdminController>(AdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
