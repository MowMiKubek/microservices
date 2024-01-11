import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthserviceController } from './authservice.controller';
import { AuthserviceService } from './authservice.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: 
        (configService: ConfigService) => {
          return {
            uri: configService.getOrThrow<string>('MONGO_URL'),
            dbName: 'microservices',
          }
        },
    }),
    AuthModule,
  ],
  controllers: [AuthserviceController],
  providers: [AuthserviceService],
})
export class AuthserviceModule {}
