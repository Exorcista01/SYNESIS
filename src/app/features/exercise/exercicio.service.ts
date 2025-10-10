import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from './exercicio.model';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTodosExercicios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/exercicios`);
  }

  getExercicioById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/exercicios/${id}`);
  }

  getQuizByExercicioId(exercicioId: string): Observable<Quiz[]> {
    return this.http.get<any>(`${this.apiUrl}/quizzes?exercicioId=${exercicioId}`);
  }
}
