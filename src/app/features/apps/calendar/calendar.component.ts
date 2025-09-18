import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';


@Component({
  selector: 'app-calendar',
  imports: [
    CommonModule,
    FullCalendarModule, 
    FormsModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendaComponent implements AfterViewInit, OnDestroy{
  @ViewChild('externalEvents', { static: true }) externalEvents!: ElementRef;
  private draggable: Draggable | null = null;
  
 
  dropRemove = true;
  isModalOpen = false;

  newEvent = { title: '', color: '#0d6efd' };

  draggableEvents = [
    { title: 'ALMOÇO', color: '#0d6efd' },
    { title: 'IR PARA CASA', color: '#ffc107' }
  ];


  calendarEvents: any[] = [];

  
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    editable: true,
    droppable: true,
    
    
    events: this.calendarEvents,

    eventReceive: (info) => {
      const newId = `event_${Date.now()}`;
      
      this.calendarEvents.push({
        id: newId,
        title: info.event.title,
        start: info.event.start,
        color: info.event.backgroundColor
      });

  
      info.event.setProp('id', newId);
    },

    eventClick: this.handleEventClick.bind(this),
  };
  
  handleEventClick(clickInfo: EventClickArg): void {
    const message = `Você tem certeza que quer deletar o evento '${clickInfo.event.title}'?`;
    
    if (confirm(message)) {
      clickInfo.event.remove(); 
      
      this.calendarEvents = this.calendarEvents.filter(event => event.id !== clickInfo.event.id);
      
      console.log('Evento deletado. Lista atual:', this.calendarEvents);
    }
  }

  ngAfterViewInit() {
    this.draggable = new Draggable(this.externalEvents.nativeElement, {
      itemSelector: '.fc-event',
      eventData: function(eventEl) {
        const eventData = JSON.parse(eventEl.getAttribute('data-event') || '{}');
        return {
          title: eventData.title,
          color: eventData.color,
          create: true
        };
      }
    });
  }

  ngOnDestroy() {
    this.draggable?.destroy();
  }
  
  getEventData(event: { title: string, color: string }): string {
    return JSON.stringify(event);
  }

  openModal(): void { this.isModalOpen = true; }
  closeModal(): void { this.isModalOpen = false; }

  addEvent(): void {
    if (this.newEvent.title.trim() === '') return;
    this.draggableEvents.push({ ...this.newEvent });
    this.newEvent = { title: '', color: '#0d6efd' };
    this.closeModal();
  }
}
