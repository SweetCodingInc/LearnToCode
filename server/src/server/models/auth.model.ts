import { IUser } from './user.model';
export interface IAuthResponse extends IUser {
    success: boolean;
    error: any;
}
