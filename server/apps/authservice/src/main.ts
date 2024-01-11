import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
import { AuthserviceModule } from './authservice.module';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
      AuthserviceModule,
      {
        transport: Transport.TCP,
        options: {
          port: +process.env.PORT
        }
      }
  )
  app.listen();
}
bootstrap();