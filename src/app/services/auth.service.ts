import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = '/api/v1/auth';
     
  constructor(private http: HttpClient) {
  }
    
  login(email:string, password:string ) {
      return this.http.post<User>(this.API_URL + '/login', {email, password}).pipe(shareReplay())
          // this is just the HTTP call, 
          // we still need to handle the reception of the token
          
  }
}
  