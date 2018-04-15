import { ActionReducerMap } from '@ngrx/store';
import { AuthStateReducer } from './reducers/auth-state.reducer';

import { IAuthState } from './models/auth.model';


export interface IApplicationState {
    auth: IAuthState;
}

export const reducers: ActionReducerMap<IApplicationState> = {
    auth: AuthStateReducer
};
