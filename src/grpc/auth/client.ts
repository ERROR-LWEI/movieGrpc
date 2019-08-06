import { ClientOptions, Transport } from '@nestjs/microservices';
import { Observable } from "rxjs";
import { join } from 'path';
export const AuthGrpcConnect: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: 'localhost:6661',
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