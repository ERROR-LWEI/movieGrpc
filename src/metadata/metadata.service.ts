import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Metadata } from './../entity/metadata.entity';
import { Repository } from 'typeorm';
import { MetadataDto } from './DTO/metadata.dto';
import { RpcException } from '@nestjs/microservices';
import { ErrorStatus } from '../enumeration/status';
import { queryOrParams } from '../utils';

@Injectable()
export class MetadataService {
    constructor(
        @InjectRepository(Metadata)
        private readonly metadata: Repository<Metadata>
    ){}

    async addMetadata(params: MetadataDto): Promise<Metadata> {
        try {
            const isMeta = await this.metadata.query(`select * from metadata where value="${params.value}" or name="${params.name}"`);
            if (isMeta.length !== 0) {
                throw new RpcException({ code: ErrorStatus.apperror, message: '存在该枚举值不能重复添加' });
            }

            const _metadata = new Metadata();
            _metadata.value = params.value;
            _metadata.name = params.name;
            _metadata.enumName = params.enumName;
            params.parentId && (_metadata.parentId = params.parentId);
            return await this.metadata.save(_metadata);
        } catch(e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }

    async queryOrFind(params:MetadataDto) {
        try {
            const _params = queryOrParams(params);
            if (!_params) {
                return null
            }
            return await this.metadata.query(`select * from metadata where ${_params}`);
        } catch (e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }

    async querys(params: MetadataDto) {
        try {
            return await this.metadata.createQueryBuilder('metadata')
            .select('*')
            .where('metadata.name = :name AND metadata.value = :value', params)
            .limit(params.pageSize)
            .offset(params.page * params.pageSize)
            .getManyAndCount();
        } catch (e) {
            console.log(e)
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }
}
