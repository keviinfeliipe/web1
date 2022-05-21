import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../shared/services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {


  userData: any;

  constructor(
    public authService: AuthService
  ) {

  }

  ngOnInit(): void {

  }
}
