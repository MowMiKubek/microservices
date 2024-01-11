import { Schema, SchemaFactory, Prop } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
    @Prop()
    firstname: string;

    @Prop()
    lastname: string;
    
    @Prop()
    email: string;

    @Prop()
    login: string;
    
    @Prop()
    password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);