import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import {
  CalendarApi,
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventInput,
} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarEventService } from '../../../core/services/calenda/calendar-event.service';

@Component({
  selector: 'app-calendar',
  imports: [CommonModule, FullCalendarModule, FormsModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendaComponent implements OnInit {
  isModalOpen = false;
  newEventTitle = '';
  private currentSelection: any = null;
  private calendarApi?: CalendarApi;
  allEvents: EventInput[] = [];
  selectedDiscipline: string = 'ALL';

  private eventService = inject(CalendarEventService);

  selectedDateInfo: DateSelectArg | null = null;

  disciplines = [
    { code: 'CQP-TI-0027', name: 'Matematica' },

    { code: 'CQP-TI-0020', name: 'Portugues' },

    { code: 'CQP-TI-0023', name: 'Lógica de programação' },

    { code: 'CQP-TI-0021', name: 'Geografia' },

    { code: 'CQP-TI-0024', name: 'Biologia' },

    { code: 'CQP-TI-0025', name: 'segurança de Redes' },

    { code: 'CQP-TI-0028', name: 'Artes' },

    { code: 'CQP-TI-0022', name: 'Redes de Computadores' },

    { code: 'CQP-TI-0022', name: 'IMC' },

    { code: 'CQP-TI-0022', name: 'GDT' },

    { code: 'CQP-TI-0022', name: 'Quimica' },

    { code: 'CQP-TI-0022', name: 'Física' },

    { code: 'CQP-TI-0022', name: 'Mundo do Trabalho' },

    { code: 'CQP-TI-0022', name: 'Noções Basicas' },

    { code: 'CQP-TI-0022', name: 'Higiene e Saude - Seg' },
  ];

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin], 
    initialView: 'dayGridMonth',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay',
    },
    editable: true,
    contentHeight: '100%',
    height: '100%',
    selectable: true,
    longPressDelay: 100,
    selectMirror: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    events: [], 
  };

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.allEvents = events; 
      this.filterEvents(); 
    });
  }

  handleDateSelect(selectInfo: any): void {
    this.isModalOpen = true;
    this.currentSelection = selectInfo;
    this.calendarApi = selectInfo.view.calendar;
  }

  handleEventClick(clickInfo: EventClickArg): void {
    if (confirm(`Deseja deletar o evento '${clickInfo.event.title}'?`)) {
      this.eventService.deleteEvent(clickInfo.event.id).subscribe({
        next: () => {
          console.log('Evento deletado!');
        },
        error: (err) => console.error('Erro ao deletar:', err),
      });
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.newEventTitle = '';
    this.currentSelection = null;
    if (this.calendarApi) {
      this.calendarApi.unselect();
    }
  }

  saveEvent(): void {
    if (!this.newEventTitle.trim() || !this.currentSelection) {
      alert('Por favor, insira um título.');
      return;
    }

    const newEvent: EventInput = {
      title: this.newEventTitle,
      start: this.currentSelection.startStr,
      end: this.currentSelection.endStr,
      allDay: this.currentSelection.allDay,
    };

    this.eventService.addEvent(newEvent).subscribe({
      next: () => {
        console.log('Evento salvo no Firestore!');
        this.closeModal();
      },
      error: (err) => {
        console.error('Erro ao salvar evento:', err);
        alert('Não foi possível salvar o evento.');
      },
    });
  }

  filterEvents(): void {
    if (this.selectedDiscipline === 'ALL') {
      this.calendarOptions.events = this.allEvents;
    } else {
      this.calendarOptions.events = this.allEvents.filter(
        (e: any) => e.disciplineCode === this.selectedDiscipline
      );
    }
  }
}
