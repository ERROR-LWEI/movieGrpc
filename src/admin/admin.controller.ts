import { Controller, UsePipes, UseInterceptors, UseFilters } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { AddaccountDto, UpdateaccountDto, RemoveaccountDto, FindaccountDto } from './DTO/account.dto';
import { AdminService } from './admin.service';
import { MLogger } from '../mlogger/mlogger.service';
import { WarnStatus, ErrorStatus } from '../enumeration/status';
import ResIntercept from '../middleware/Intercept/ResIntercept';
import ValidationPipes from './../middleware/Pipe/ValidationPipe';
import AllExceptions from './../middleware/Exceptions/AllExceptions';
import { UpdateuserDto, FinduserDto } from './DTO/user.dto';

@Controller('admin')
export class AdminController {
    constructor(
        private readonly Account: AdminService,
        private readonly mLogger: MLogger
    ) {}

    @GrpcMethod('AuthService', 'Sigin')
    @UseInterceptors(new ResIntercept<any>())
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async sigin(data: AddaccountDto, metadata: any) {
        this.mLogger.log(`${JSON.stringify(data)}-注册参数`, 'AuthService-Sigin');
        let account = await this.Account.findAccountOne(data);
        if (!!account) {
            this.mLogger.warn(`${JSON.stringify(data)}-账号存在`, 'AuthService-Insert');
            throw new RpcException({ code: WarnStatus.addwarn, message: '账号已存在' });
        }
        account = await this.Account.sigin(data);
        if (!account) {
            this.mLogger.warn(`${JSON.stringify(data)}-注册异常`, 'AuthService-Insert');
            throw new RpcException({ code: WarnStatus.addwarn, message: '注册异常' });
        }
        return account;
    }

    @GrpcMethod('AuthService', 'EditAccount')
    @UseInterceptors(new ResIntercept<any>())
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async editAccount(data: UpdateaccountDto, metadata: any) {
        return await this.Account.updateAccount(data);
    }

    @GrpcMethod('AuthService', 'Login')
    @UseInterceptors(new ResIntercept<any>())
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async login(data: FindaccountDto, metadata: any) {
        this.mLogger.log(`${JSON.stringify(data)}-登录参数`, 'AuthService-Login');
        return await this.Account.findAccountOne(data);
    }

    @GrpcMethod('AuthService', 'GetUserMessage')
    @UseInterceptors(new ResIntercept<any>())
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async getUserMessage(data: FinduserDto, metadata) {
        return await this.Account.findUserOne(data);
    }

    @GrpcMethod('AuthService', 'EditUserMessage')
    @UseInterceptors(new ResIntercept<any>())
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async editUserMessage(data: UpdateuserDto, metadata: any) {
        return await this.Account.updateUser(data);
    }

    @GrpcMethod('AuthService', 'GetUserMessages')
    @UseInterceptors(new ResIntercept<any>())
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async getUserMessages(data: FinduserDto, metadata: any) {
        return await this.Account.findUsers(data);
    }
}
