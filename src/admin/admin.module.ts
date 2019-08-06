import { Module } from '@nestjs/common';
import { Account } from '../entity/account.entity';
import { User } from '../entity/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        Account,
        User
    ])],
    controllers: [AdminController],
    providers: [AdminService],
})
export class AdminModule {} 
