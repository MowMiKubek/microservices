import { Module } from '@nestjs/common';
import { AuthserviceController } from './authservice.controller';
import { AuthserviceService } from './authservice.service';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [AuthserviceController],
  providers: [AuthserviceService, AuthService],
})
export class AuthserviceModule {}
