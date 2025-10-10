import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) { }

  getCurrentUserId(): string | null {
    const userString = localStorage.getItem('user');
    if (userString){
      const user = JSON.parse(userString);
      return user.id;
    }
    return null;
  }

  logout(): void{
    localStorage.removeItem('user');
  }

    

  registerUser(userDetails: User){
    return this.http.post(`${this.baseUrl}`, userDetails);
  }

  login (email: string, password: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}?email=${email}&password=${password}`);
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  /**
   */
  updateUser(id: string, userDetails: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, userDetails);
  }

}
