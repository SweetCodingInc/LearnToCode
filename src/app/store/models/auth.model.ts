import { IUser } from './user.model';

export interface IAuthResponse {
    user: IUser;
}

export interface IAuthRequest {
    username: string;
    password: string;
}

export interface IAuthState {
    active: boolean;
    user: IUser;
    error: any;
    request: IAuthRequest;
}

export const INITIAL_AUTH_STATE: IAuthState = {
    active: false,
    user: undefined,
    error: undefined,
    request: {
        username: '',
        password: ''
    }
};
