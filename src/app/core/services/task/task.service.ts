import { Injectable, inject } from '@angular/core';
import { from, Observable } from 'rxjs';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
} from '@angular/fire/firestore';

export interface Task {
  id: string; 
  title: string;
  pomosEstimated: number;
  pomosCompleted: number;
  isCompleted: boolean;
  completionDate?: string | null;
}


@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private firestore: Firestore = inject(Firestore);
  private tasksCollection = collection(this.firestore, 'tasks'); 

  constructor() {}

  getTasks(): Observable<Task[]> {
    return collectionData(this.tasksCollection, { idField: 'id' }) as Observable<Task[]>;
  }

  addTask(taskData: Omit<Task, 'id'>): Observable<any> {
    return from(addDoc(this.tasksCollection, taskData));
  }

  updateTask(taskData: Task): Observable<void> {
    const taskDocRef = doc(this.firestore, `tasks/${taskData.id}`);
    const { id, ...dataToUpdate } = taskData; 
    return from(updateDoc(taskDocRef, dataToUpdate));
  }

  deleteTask(id: string): Observable<void> {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return from(deleteDoc(taskDocRef));
  }
}