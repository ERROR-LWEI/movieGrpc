import { ClientOptions, Transport } from '@nestjs/microservices';
import { Observable } from "rxjs";
import { join } from 'path';

export const MetadataGrpcConnect: ClientOptions = {
    transport: Transport.GRPC,
    options: {
        url: '0.0.0.0:6663' ,
        package: 'metadata',
        protoPath: join(__dirname, '../../../grpc/metadata/metadata.proto')
    }
}

export interface MetadataGrpcService {
    addMetadata: (params: any) => Observable<any>;
    getMetadatas: (params: any) => Observable<any>;
    getQuerys: (params: any) => Observable<any>; 
}