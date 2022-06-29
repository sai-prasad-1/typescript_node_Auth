import { Schema, model, connect } from 'mongoose';

export interface IUser {
    name: string;
    email: string;
    password: string;
    date: Date;
}

const userSchema = new Schema<IUser>({
    name:{
        type: String,
        required: true

    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
})


export const User = model<IUser>('user', userSchema);