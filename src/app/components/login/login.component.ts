import { Observable } from 'rxjs/Observable';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';

import { Store } from '@ngrx/store';
import { IApplicationState } from '../../store';

import { LoginStartAction } from '../../store/actions/auth.actions';
import { IAuthState } from '../../store/models/auth.model';
import { IUser } from '../../store/models/user.model';
import { AuthStateSelectors } from '../../store/reducers/auth-state.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('class')
  className = 'f c';

  authState: IAuthState;

  loginForm: FormGroup;
  active: boolean;
  error: any;
  user: IUser;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private store: Store<IApplicationState>
  ) {

    store.subscribe((state: IApplicationState) => {
      this.authState = state.auth;
      this.active = state.auth.active;
      this.error = state.auth.error;
      this.user = state.auth.user;
      if (this.user) {
        this.router.navigate(['/dashboard']);
      }
    });
    this.buildLoginForm();
  }

  buildLoginForm() {
    this.loginForm = this.fb.group({
      username: [this.authState.request.username, Validators.required],
      password: [this.authState.request.password, Validators.required]
    });
  }

  ngOnInit() { }

  login() {
    this.authState.request = this.loginForm.value;
    this.store.dispatch(new LoginStartAction(this.authState));
  }

}
