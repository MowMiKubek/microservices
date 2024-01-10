import {Inject, Injectable, OnApplicationBootstrap} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {UserDTO} from "./dto/user.dto";

@Injectable()
export class AuthService implements OnApplicationBootstrap{
    constructor(@Inject("AUTH_MICROSERVICE") private authMicroservice: ClientProxy) {
    }

    async onApplicationBootstrap() {
        await this.authMicroservice.connect();
    }

    login(userDTO: UserDTO) {
        return this.authMicroservice.send<UserDTO>({cmd: 'login'}, userDTO);
    }
    register(userDTO: UserDTO) {
        return this.authMicroservice.send<UserDTO>({cmd: 'register'}, userDTO);
    }
}
