import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Credentials } from '../models/credentials';
import { RouteMap } from '../route-map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  credentials: Credentials;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.credentials = new Credentials();
  }

  submit(): void {
    this.authService.login(this.credentials);
    this.router.navigate([`${RouteMap.userZone}/${RouteMap.features}`]);
  }
}
