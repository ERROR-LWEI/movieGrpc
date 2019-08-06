/** 加载环境配置 **/
require('dotenv').config()

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { AuthGrpcConnect } from './grpc/auth/client';
import { MovieGrpcConnect } from './grpc/movie/client';
import { MetadataGrpcConnect } from './grpc/metadata/client';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice(AuthGrpcConnect);
  app.connectMicroservice(MovieGrpcConnect);
  app.connectMicroservice(MetadataGrpcConnect);

  await app.startAllMicroservicesAsync();
  app.listenAsync('6660')
  Logger.log('服务启动成功')
}
bootstrap();
