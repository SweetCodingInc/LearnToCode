import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { AuthService } from '../../services/auth.service';
import { AUTH_ACTION_CONSTANTS, LoginStartAction, LoginSuccessAction, LoginFailureAction } from '../actions/auth.actions';
import { IAuthResponse } from '../models/auth.model';
import { IUser } from '../models/user.model';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthStateEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ) { }

    @Effect()
    login: Observable<Action> = this.actions$.ofType(AUTH_ACTION_CONSTANTS.LOGIN_ACTION.START)
        .switchMap((action: LoginStartAction) => {
            return this.authService.login(action.payload.request)
                .map((result: IUser) => {
                    const response = { ...action.payload };
                    response.user = result;
                    return new LoginSuccessAction(response);
                })
                .catch(error => {
                    const response = { ...action.payload };
                    response.error = error;
                    return Observable.of(new LoginFailureAction(response));
                });
        });
}
