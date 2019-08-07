/** 加载环境配置 **/
require('dotenv').config()

import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { AuthGrpcConnect } from './grpc/auth/client';
import { MovieGrpcConnect } from './grpc/movie/client';
import { MetadataGrpcConnect } from './grpc/metadata/client';

const { START_PORT } = process.env;

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // app.connectMicroservice(AuthGrpcConnect);
  // app.connectMicroservice(MovieGrpcConnect);
  // app.connectMicroservice(MetadataGrpcConnect);
  // await app.startAllMicroservices();
  const app = await NestFactory.createMicroservice(AppModule, AuthGrpcConnect);
  await app.listenAsync();
  Logger.log(`服务启动成功${START_PORT}`)
}
bootstrap();
