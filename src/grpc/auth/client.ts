import { ClientOptions, Transport } from '@nestjs/microservices';
import { Observable } from "rxjs";
import { join } from 'path';

const { AUTH_PORT } = process.env;

export const AuthGrpcConnect: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: `127.0.0.1:${AUTH_PORT}`,
        package: 'auth',
        protoPath: join(__dirname, '../../../grpc/auth/auth.proto'),
    }
}

export interface AuthService {
    sigin: (params: any) => Observable<any>;
    editAccount: (params: any) => Observable<any>;
    login: (params: any) => Observable<any>;
    getUserMessage: (params: any) => Observable<any>;
    editUserMessage: (params: any) => Observable<any>;
    getUserMessages: (params: any) => Observable<any>;
}