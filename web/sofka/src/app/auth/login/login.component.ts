import { Component, OnInit } from '@angular/core';

import { AuthService  } from '../../shared/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: any;

  constructor(
    public authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.authService.isLoggedIn? this.authService.router.navigate(['home']):"";
  }

}
