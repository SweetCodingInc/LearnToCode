import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuthRequest } from '../store/models/auth.model';
import { IUser } from '../store/models/user.model';

@Injectable()
export class AuthService {
  private API_END_POINT = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) { }

  login(credentials: IAuthRequest): Observable<IUser> {
    return this.http.get<IUser>(`${this.API_END_POINT}/login?username=${credentials.username}&password=${credentials.password}`);
  }

}
