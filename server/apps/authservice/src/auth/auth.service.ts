import { Injectable } from '@nestjs/common';
import { LoginDTO } from './dto/login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
    }

    async login(loginDTO: LoginDTO) {
        const user = await this.userModel.findOne({login: loginDTO.login}).exec();
        if (user && user.password === loginDTO.password)
            return {status: "SUCCESSFUL", token: "abc"};
        return {status: "FAILED", message: "User not found"}
    }

    register(loginDTO: LoginDTO) {
        if(loginDTO.login !== '' && loginDTO.password !== '') {
            return {status: "SUCCESSFUL", token: "abc"};
        }
        return {status: "FAILED", message: "Invalid data"}
    }
}
