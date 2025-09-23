import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 


export interface ProgressDay {
  date: string;
  status: 'completed' | 'missed' | 'in-progress' | null; 
}

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

@Component({
  selector: 'app-calenda-progress',
  imports: [
    CommonModule,

  ],
  templateUrl: './calenda-progress.component.html',
  styleUrl: './calenda-progress.component.css'
})
export class CalendaProgressComponent implements OnInit {
  @Input() progressData: ProgressDay[] = [];

  currentDate: Date = new Date();
  monthDays: CalendarDay[] = []; 
  monthName: string = '';
  weekDays: string[] = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  today: Date = new Date();

  ngOnInit() {
    this.today.setHours(0, 0, 0, 0);
    this.generateCalendar();
  }


  generateCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    this.monthName = this.currentDate.toLocaleDateString('pt-BR', { month: 'long' });
    this.monthDays = [];

    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfPrevMonth = new Date(year, month, 0).getDate();

    for (let i = firstDayOfMonth; i > 0; i--) {
      this.monthDays.push({
        date: new Date(year, month - 1, lastDayOfPrevMonth - i + 1),
        isCurrentMonth: false
      });
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
      this.monthDays.push({
        date: new Date(year, month, i),
        isCurrentMonth: true
      });
    }


    const remainingCells = 42 - this.monthDays.length;
    for (let i = 1; i <= remainingCells; i++) {
        this.monthDays.push({
            date: new Date(year, month + 1, i),
            isCurrentMonth: false
        });
    }
  }

  
  previousMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }


  getDayStatus(calendarDay: CalendarDay): 'completed' | 'missed' | 'in-progress' | 'future' | null {
    if (!calendarDay.isCurrentMonth) return null; 

    const dayDate = new Date(calendarDay.date);
    dayDate.setHours(0, 0, 0, 0);

    if (dayDate.getTime() === this.today.getTime()) {
      return 'in-progress';
    }

    if (dayDate < this.today) {
      const progress = this.progressData.find(p => new Date(p.date).setHours(0,0,0,0) === dayDate.getTime());
      return progress ? 'completed' : 'missed';
    }

    return 'future';
  }
}
