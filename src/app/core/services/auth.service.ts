import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(userDetails: User){
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  login (email: string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}&password=${password}`);
  }

}
