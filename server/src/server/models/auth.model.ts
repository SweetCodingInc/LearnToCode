import { IUser } from './user.model';

export interface IAuthResponse extends IUser {
    success: boolean;
    message: any;
}

export interface IAuthRequest {
    username: string;
    password: string;
}
