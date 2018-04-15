import { createSelector } from '@ngrx/store';

import { AUTH_ACTION_CONSTANTS, LOGIN_ACTION_TYPES } from '../actions/auth.actions';
import { INITIAL_AUTH_STATE, IAuthState } from '../models/auth.model';
import { IApplicationState } from '../';
import { IUser } from '../models/user.model';

export function AuthStateReducer(
    state: IAuthState = INITIAL_AUTH_STATE,
    action: LOGIN_ACTION_TYPES
): IAuthState {
    switch (action.type) {
        case AUTH_ACTION_CONSTANTS.LOGIN_ACTION.START:
            return { ...state, active: true };
        case AUTH_ACTION_CONSTANTS.LOGIN_ACTION.SUCCESS:
            return { ...state, active: false, user: action.payload.user };
        case AUTH_ACTION_CONSTANTS.LOGIN_ACTION.FAILURE:
            return { ...state, active: false, error: action.payload.error };
        default:
            return { ...state };
    }
}

function getAuthStateActive(state: IApplicationState): boolean {
    return state.auth.active;
}

function getAuthStateUser(state: IApplicationState): IUser {
    return state.auth.user;
}

function getAuthStateError(state: IApplicationState): any {
    return state.auth.error;
}


export const AuthStateSelectors = {
    active: createSelector(
        getAuthStateActive,
        active => active
    ),
    user: createSelector(
        getAuthStateUser,
        user => user
    ),
    error: createSelector(
        getAuthStateError,
        error => error
    )
};
