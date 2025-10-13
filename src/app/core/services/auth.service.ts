import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/users';

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {}

  public get currentUserValue(): User | null {
    return this.currentUserSubject.getValue();
  }

  getCurrentUserId(): string | null {
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      return user.id;
    }
    return null;
  }

  logout(): void {
    localStorage.removeItem('user');
  }

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}`, userDetails);
  }

  login(email: string, password: string): Observable<User[]> {
    return this.http
      .get<User[]>(`${this.baseUrl}?email=${email}&password=${password}`)
      .pipe(
        tap((users) => {
          const user = users.length > 0 ? users[0] : null;
          this.currentUserSubject.next(user);
        })
      );
  }

  getUserById(id: string): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`).pipe(
      tap((user) => {
        this.currentUserSubject.next(user);
      })
    );
  }

 
  updateUser(id: string, userDetails: User): Observable<User> {
  return this.http.put<User>(`${this.baseUrl}/${id}`, userDetails).pipe(
    tap(updatedUser => {
      this.currentUserSubject.next(updatedUser);
    })
  );
}
}
