import { NestFactory } from '@nestjs/core';
import { AuthserviceModule } from './authservice.module';

async function bootstrap() {
  const app = await NestFactory.create(AuthserviceModule);
  await app.listen(5001);
}
bootstrap();
