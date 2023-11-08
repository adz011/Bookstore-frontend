import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthRepresentation} from "../models/auth.model";
import {UserRepresentation} from "../models/user.model";
import {Router} from "@angular/router";
import {JWTTokenService} from "./jwttoken.service";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private jwtTokenService: JWTTokenService
  ) {
  }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    let token = this.getToken()
    if (token != null) {
      return !this.jwtTokenService.isTokenExpired(token)
    } else {
      return false
    }
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate([('login')])
  }

  login(user: UserRepresentation) {
    return this.http.post<AuthRepresentation>('/api/v1/auth/authenticate', {
      email: user.email!!,
      password: user.password
    }).pipe().subscribe({
      next: response => {
        if (response.token) {
          this.setToken(response.token)
          this.router.navigate([('/home')])
        }
      }
    })
  }

  register(user: UserRepresentation) {
    return this.http.post<AuthRepresentation>('/api/v1/auth/register', {
      firstname: user.firstname!!,
      lastname: user.lastname!!,
      nickname: user.nickname!!,
      email: user.email!!,
      password: user.password!!,
      role: user.role
    }).pipe().subscribe({
      next: response => {
        if (response.token) {
          this.setToken(response.token)
          this.router.navigate([('/home')])
        }
      }
    })
  }
}