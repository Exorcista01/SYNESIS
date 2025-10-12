import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventInput } from '@fullcalendar/core/index.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {


  private apiUrl = 'http://localhost:3000/events'; 

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventInput[]> {
    return this.http.get<EventInput[]>(this.apiUrl);
  }

  addEvent(events: EventInput): Observable<EventInput> {
    return this.http.post<EventInput>(this.apiUrl, events);
  }

  deleteEvent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
