import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RpcException } from '@nestjs/microservices';
import { Movie } from './../entity/movie.entity';
import { MovieDto, MovieUpdateDto } from './dto/Movie.dto';
import { ErrorStatus } from '../enumeration/status';

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movie)
        private readonly  movie: Repository<Movie>,
    ){}

    /**
     * 添加信息
     * @param params 
     */
    async add(params: MovieDto): Promise<any> {
        try {
            const _doc = new Movie();
            _doc.name = params.name;
            _doc.name_en = params.name_en;
            _doc.site = params.site.join(',');
            _doc.type = params.type.join(',');
            _doc.year = new Date(params.year);
            _doc.language = params.language.join(',');
            _doc.img = params.img;
            _doc.info = params.info;
            _doc.vindicator = params.vindicator;
            console.log( _doc);
            const data: any = await this.movie.save(_doc);
            data.type = data.type.split(',');
            data.site = data.site.split(',');
            data.language = data.language.split(',');
            return data;
        } catch(e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }

    async findUserMovies(params: MovieUpdateDto):Promise<Movie[]> {
        try {
            console.log(params);
            const data = await this.movie
            .createQueryBuilder('movie')
            .leftJoin('movie.vindicator', 'user')
            .where('user.accountId = :id', { id: params.vindicatorId })
            .getMany();
            console.log(data);
            return data;
        } catch (e) {
            throw new RpcException({ code: ErrorStatus.apperror, message: JSON.stringify(e) });
        }
    }

}
