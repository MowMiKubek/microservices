import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
    private database: any[];

    constructor() {
        this.database = [{login: 'kuba', password: 'password'}];
    }

    login(loginDTO: LoginDTO) {
        const user = this.database.find(item => item.login === loginDTO.login);
        if (user && user.password === loginDTO.password)
            return {status: "SUCCESSFUL", token: "abc"};
        return {status: "FAILED", message: "User not found"}
    }

    register(loginDTO: LoginDTO) {
        if(loginDTO.login !== '' && loginDTO.password !== '') {
            this.database.push(loginDTO);
            return {status: "SUCCESSFUL", token: "abc"};
        }
        return {status: "FAILED", message: "Invalid data"}
    }
}
