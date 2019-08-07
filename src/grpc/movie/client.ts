import { ClientOptions, Transport } from '@nestjs/microservices';
import { Observable } from "rxjs";
import { join } from 'path';

export const MovieGrpcConnect: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '0.0.0.0:6662',
        package: 'movie',
        protoPath: join(__dirname, '../../../grpc/movie/movie.proto'),
    }
}

export interface MovieGrpcService {
    addMovie: (params: any) => Observable<any>;
    getMovies: (params: any) => Observable<any>;
}