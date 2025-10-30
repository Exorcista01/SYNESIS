import { Injectable, inject } from '@angular/core';
import { EventInput } from '@fullcalendar/core/index.js';
import { Observable, from, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';   
import {
  Firestore,
  collection,
  collectionData,
  doc,
  addDoc,
  deleteDoc,
  query,  
  where,    
} from '@angular/fire/firestore';

import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class CalendarEventService {
  private firestore: Firestore = inject(Firestore);
  private authService: AuthService = inject(AuthService);
  private eventsCollection = collection(this.firestore, 'events');

  constructor() {}

  getEvents(): Observable<EventInput[]> {
    return this.authService.currentUser$.pipe(
      switchMap(user => {
        if (user && user.id) {
          const userEventsQuery = query(
            this.eventsCollection,
            where('userId', '==', user.id) 
          );
          return collectionData(userEventsQuery, { idField: 'id' }) as Observable<EventInput[]>;
        } else {

          return of([]);
        }
      })
    );
  }

  addEvent(event: EventInput): Observable<any> {
   const currentUserId = this.authService.getCurrentUserId(); 
    
    if (!currentUserId) {
      return from(Promise.reject(new Error('Nenhum usuário logado para adicionar evento.')));
    }
    
    const eventWithUser = {
      ...event,
      userId: currentUserId 
    };

    return from(addDoc(this.eventsCollection, eventWithUser));
  }

  deleteEvent(id: string): Observable<void> {
    const eventDocRef = doc(this.firestore, `events/${id}`);
    return from(deleteDoc(eventDocRef));
  }
}