import { Injectable, inject } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model'; 

import {
  Auth,
  authState, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';


import {
  Firestore,
  doc, 
  docData, 
  setDoc, 
  updateDoc, 
  getDoc,  
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private firestore: Firestore = inject(Firestore);

  public currentUser$: Observable<User | null> = authState(this.auth).pipe(
    switchMap((authUser) => {
      if (authUser) {
        return this.getUserById(authUser.uid);
      } else {
        return of(null);
      }
    })
  );

  constructor() {}

  getCurrentUserId(): string | null {
    return this.auth.currentUser?.uid || null;
  }

  logout(): Observable<void> {
    return from(signOut(this.auth));
  }

  registerUser(userDetails: User): Observable<void> {
    const { email, password, ...userData } = userDetails; 

    if (!email || !password) {
      throw new Error('Email e senha são obrigatórios para registro.');
    }

    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap((userCredential) => {
        const userDocRef = doc(this.firestore, `users/${userCredential.user.uid}`);
        return from(setDoc(userDocRef, { uid: userCredential.user.uid, email, ...userData }));
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return from(signInWithEmailAndPassword(this.auth, email, password));
  }

  getUserById(id: string): Observable<User> {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return docData(userDocRef) as Observable<User>;
  }

  updateUser(id: string, userDetails: Partial<User>): Observable<void> {
    const userDocRef = doc(this.firestore, `users/${id}`);
    return from(updateDoc(userDocRef, userDetails));
  }
}