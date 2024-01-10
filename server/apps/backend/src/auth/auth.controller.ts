import {Body, Controller, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {UserDTO} from "./dto/user.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post("/login")
    login(@Body() userDto: UserDTO) {
      return this.authService.login(userDto);
    }

    @Post("/register")
    register(@Body() userDto: UserDTO) {
      return this.authService.register(userDto);
    }
}
