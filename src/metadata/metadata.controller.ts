import { Controller, UseInterceptors, UsePipes, UseFilters } from '@nestjs/common';
import { MetadataService } from './metadata.service';
import { GrpcMethod } from '@nestjs/microservices';
import ResIntercept from '../middleware/Intercept/ResIntercept';
import ValidationPipes from './../middleware/Pipe/ValidationPipe';
import AllExceptions from './../middleware/Exceptions/AllExceptions';

@Controller('metadata')
export class MetadataController {
    constructor(
        private readonly metadataService: MetadataService
    ){}

    @GrpcMethod('MetadataGrpcService', 'AddMetadata')
    @UseInterceptors(new ResIntercept<any>("添加成功"))
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async addMetadata(data, metadata: any) {
        return await this.metadataService.addMetadata(data);
    }

    @GrpcMethod('MetadataGrpcService', 'GetQuerys')
    @UseInterceptors(new ResIntercept<any>("查询成功"))
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async getQuerys(data, metadata: any) {
        return await this.metadataService.queryOrFind(data);
    }

    @GrpcMethod('MetadataGrpcService', 'GetMetadatas')
    @UseInterceptors(new ResIntercept<any>("查询成功"))
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async getMetadatas(data, metadata: any) {
        const _data = await this.metadataService.querys(data);
        return _data;
    }
}
