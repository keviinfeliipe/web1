import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../../shared/services/authentication.service";

@Component({
  selector: 'app-reset-account',
  templateUrl: './reset-account.component.html',
  styleUrls: ['./reset-account.component.scss']
})
export class ResetAccountComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public rouer : Router
  ) { }

  ngOnInit(): void {
  }

  login():void{
    this.rouer.navigate(['login'])
  }


}
