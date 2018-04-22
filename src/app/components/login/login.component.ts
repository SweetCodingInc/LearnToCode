import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { IAuthState } from '../../store/models/auth.model';
import { IApplicationState } from '../../store';
import { AuthStateSelectors } from '../../store/reducers/auth-state.reducer';
import { LoginStartAction } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', './login.component.utilities.css']
})

export class LoginComponent implements OnInit {
  @HostBinding('class')
  className = 'f c';

  loginForm: FormGroup;
  authState: IAuthState;

  constructor(
    private fb: FormBuilder,
    private store: Store<IApplicationState>,
    private router: Router
  ) {
    store.select(AuthStateSelectors.authState).subscribe((state: IAuthState) => {
      this.authState = state;
      if (state.user) {
        this.router.navigate(['dashboard']);
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

  ngOnInit() {
  }

  login() {
    this.authState.request = this.loginForm.value;
    this.store.dispatch(new LoginStartAction(this.authState));
  }

}
