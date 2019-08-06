require('dotenv').config({
  path: require('path').resolve(process.cwd(), 'test.env')
});

import { Test, TestingModule } from '@nestjs/testing';
import { AdminService } from './admin.service';
import { AppModule } from '../app.module';
import { AdminModule } from './admin.module';

describe('AdminService', () => {
  let service: AdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule, AdminModule],
      providers: [AdminService],
    }).compile();

    service = module.get<AdminService>(AdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
