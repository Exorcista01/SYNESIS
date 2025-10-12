import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import {
  CalendarOptions,
  EventClickArg,
  EventInput,
  DateSelectArg,
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
  allEvents: EventInput[] = [];
  selectedDiscipline: string = 'ALL';

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
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };

  constructor(private calendarEventService: CalendarEventService) {}

  ngOnInit(): void {
    this.calendarEventService.getEvents().subscribe((event: EventInput[]) => {
      this.calendarOptions.events = event;
      this.filterEvents();
    });
  }

  handleDateSelect(selectInfo: DateSelectArg): void {
    this.selectedDateInfo = selectInfo;
    this.isModalOpen = true;
  }

  handleEventClick(clickInfo: EventClickArg): void {
    if (
      confirm(
        `Tem certeza que quer deletar o evento '${clickInfo.event.title}'?`
      )
    ) {
      const eventId = clickInfo.event.id;
      this.calendarEventService.deleteEvent(eventId).subscribe(() => {
        clickInfo.event.remove();
      });
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.newEventTitle = '';
    if (this.selectedDateInfo) {
      this.selectedDateInfo.view.calendar.unselect();
    }
  }

  saveEvent(): void {
    if (this.newEventTitle.trim() === '' || !this.selectedDateInfo) return;

    const newEvent: EventInput = {
      id: String(Date.now()),
      title: this.newEventTitle,
      start: this.selectedDateInfo.startStr,
      end: this.selectedDateInfo.endStr,
      allDay: this.selectedDateInfo.allDay,
    };

    this.calendarEventService.addEvent(newEvent).subscribe(() => {
      const calendarApi = this.selectedDateInfo!.view.calendar;
      calendarApi.addEvent(newEvent);
      this.closeModal();
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
