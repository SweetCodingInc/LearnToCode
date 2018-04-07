import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @HostBinding('class')
  className = 'f c';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['dashboard']);
  }

}
