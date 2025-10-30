import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './exercicio.model'; 

import {
  Firestore,
  collection,       
  collectionData,   
  doc,              
  docData,         
  query,           
  where,            
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class ExercicioService {
  private firestore: Firestore = inject(Firestore);

  private exerciciosCollection = collection(this.firestore, 'exercicios');
  private quizzesCollection = collection(this.firestore, 'quizzes');

  constructor() {}

  getTodosExercicios(): Observable<any[]> {
    return collectionData(this.exerciciosCollection, { idField: 'id' }) as Observable<any[]>;
  }

  getExercicioById(id: string): Observable<any> {
    const exercicioDocRef = doc(this.firestore, `exercicios/${id}`);
    return docData(exercicioDocRef, { idField: 'id' }) as Observable<any>;
  }

  getQuizByExercicioId(exercicioId: string): Observable<Quiz[]> {
    const q = query(
      this.quizzesCollection,
      where('exercicioId', '==', exercicioId) 
    );

    return collectionData(q, { idField: 'id' }) as Observable<Quiz[]>;
  }
}