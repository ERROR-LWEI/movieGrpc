import { Controller, UsePipes, UseInterceptors, UseFilters, OnModuleInit } from '@nestjs/common';
import { MovieService } from './movie.service';
import { GrpcMethod, Client, ClientGrpc  } from '@nestjs/microservices';
import { MovieDto, MovieUpdateDto } from './dto/Movie.dto';
import ResIntercept from '../middleware/Intercept/ResIntercept';
import ValidationPipes from './../middleware/Pipe/ValidationPipe';
import AllExceptions from './../middleware/Exceptions/AllExceptions';
import { AuthGrpcConnect, AuthService } from '../grpc/auth/client';

@Controller('movie')
export class MovieController implements  OnModuleInit {
    // @Client(AuthGrpcConnect)
    // private readonly client: ClientGrpc;
    // private authClient: AuthService;
    constructor(
        private readonly movieService: MovieService
    ){}

    onModuleInit() {
        //this.authClient = this.client.getService<AuthService>('AuthService');
    }

    @GrpcMethod('MovieGrpcService', 'AddMovie')
    @UseInterceptors(new ResIntercept<any>("添加成功"))
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async addMovie(_data: MovieDto, metadata: any) {
        // const { data } = await this.authClient.getUserMessage({ accountId: _data.vindicatorId }).toPromise();
        _data.vindicator = [];
        //_data.vindicator.push(data);
        return await this.movieService.add(_data);
    }

    @GrpcMethod('MovieGrpcService', 'GetMovies')
    @UseInterceptors(new ResIntercept<any>("查询成功"))
    @UsePipes(new ValidationPipes())
    @UseFilters(new AllExceptions())
    async getMovies(data: MovieUpdateDto, metadata: any) {
        const _data = await this.movieService.findUserMovies(data);
        return _data;
    }
}
