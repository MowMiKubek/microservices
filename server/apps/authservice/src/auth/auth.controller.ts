import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { MessagePattern } from '@nestjs/microservices';
import { LoginDTO } from './dto/login.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern({ cmd: 'login'})
  login(loginDTO: LoginDTO) {
    return this.authService.login(loginDTO);
  }
  @MessagePattern({ cmd: 'register'})
  register(loginDTO: LoginDTO) {
    return this.authService.register(loginDTO);
  }
}