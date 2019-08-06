import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Figure } from '../entity/figure.entity';
import { Repository } from 'typeorm';
import { FigureDto } from './dto/Figure.dto';
import { RpcException } from '@nestjs/microservices';
import { ErrorStatus } from '../enumeration/status';

@Injectable()
export class FigureService {
    constructor(
        @InjectRepository(Figure)
        private readonly figure: Repository<Figure>
    ){}

    /**
     * 添加人物信息
     * @param param 
     */
    async add(param: FigureDto): Promise<any> {
        try {
            const _doc = new Figure();
            _doc.name = param.name;
            _doc.name_en = param.name_en;
            _doc.year = param.year;
            _doc.avatars = param.avatars;
            _doc.info = param.info;
            _doc.nationality = param.nationality;
            return await this.figure.save(_doc);
        } catch(e) {
            throw new RpcException({code: ErrorStatus.apperror, message: JSON.stringify(e)})
        }
    }
}
