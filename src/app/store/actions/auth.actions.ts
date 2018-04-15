import { Action } from '@ngrx/store';

import { IAuthState } from '../models/auth.model';
import { IUser } from '../models/user.model';

const ASYNC_ACTION_TYPES = {
    START: 'START',
    SUCCESS: 'SUCCESS',
    FAILURE: 'FAILURE'
};

export const AUTH_ACTION_CONSTANTS = {
    LOGIN_ACTION: ASYNC_ACTION_TYPES,
    LOGOUT_ACTION: ASYNC_ACTION_TYPES
};

export class LoginStartAction implements Action {
    readonly type: string = AUTH_ACTION_CONSTANTS.LOGIN_ACTION.START;
    constructor(public payload: IAuthState) { }
}

export class LoginSuccessAction implements Action {
    readonly type: string = AUTH_ACTION_CONSTANTS.LOGIN_ACTION.SUCCESS;
    constructor(public payload: IAuthState) { }
}

export class LoginFailureAction implements Action {
    readonly type: string = AUTH_ACTION_CONSTANTS.LOGIN_ACTION.FAILURE;
    constructor(public payload: IAuthState) { }
}

export type LOGIN_ACTION_TYPES
    = LoginStartAction
    | LoginSuccessAction
    | LoginFailureAction;
