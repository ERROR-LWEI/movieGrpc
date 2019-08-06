import { Injectable } from '@nestjs/common';
import { Repository, getManager, getSqljsManager } from 'typeorm';
import { RpcException } from '@nestjs/microservices';
import { Account } from '../entity/account.entity';
import { AddaccountDto, FindaccountDto, UpdateaccountDto } from './DTO/account.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { ErrorStatus } from '../enumeration/status'
import { FinduserDto, UpdateuserDto } from './DTO/user.dto';

@Injectable()
export class AdminService {
    constructor(
        @InjectRepository(Account)
        private readonly account: Repository<Account>,
        @InjectRepository(User)
        private readonly user: Repository<User>
    ) {}

    /** 注册服务 **/
    async sigin(data: AddaccountDto):Promise<Account> {
        try {
            const { account, password, terrace, terraceId } = data;
            const accountDOC = new Account();
            const userDOC = new User();
            accountDOC.account = account;
            accountDOC.password = password;
            terrace && (accountDOC.terrace = terrace);
            terraceId && (accountDOC.terraceId = terraceId);
            /** 用户账号注册与用户信息创建是同时执行 **/
            return this.account.manager.transaction(async transactionalEntityManager => {
                let saveAccount = await transactionalEntityManager.save<Account>(accountDOC);
                userDOC.accountId = saveAccount.id;
                userDOC.name = `用户_${accountDOC.id}`;
                userDOC.info = '';
                await transactionalEntityManager.save<User>(userDOC);
                return saveAccount
            }).then(res => res).catch(e => {
                return null
            });
        } catch(e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }

    async findAccountOne(data: FindaccountDto | AddaccountDto): Promise<Account> {
        try {
            return await this.account.findOne(data);
        } catch(e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }

    async updateAccount(data: UpdateaccountDto): Promise<any> {
        try {
            const { id, ...updateData } = data;
            return await this.account.update({ id }, updateData);
        } catch(e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }

    async updateUser(data: UpdateuserDto): Promise<any> {
        try {
            const { id, ...updatadata } = data;
            return await this.user.update({ id }, updatadata);
        } catch(e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }

    async findUserOne(data: FinduserDto): Promise<User> {
        try {
            return await this.user.findOne(data);
        } catch(e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }

    async findUsers(data: FinduserDto): Promise<User[]> {
        try {
            const params = data.ids || data.accountIds
            return await this.user.findByIds(params);
        } catch(e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }
}
