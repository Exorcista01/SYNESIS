import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 


export interface ProgressDay {
  date: string;
  level: 'low' | 'medium' | 'high';
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
  public currentDate: Date = new Date();
  public monthDays: (Date | null)[] = [];
  public monthName: string = '';
  public weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  private progressMap: Map<string, string> = new Map();

  ngOnInit(): void {
    this.generateCalendar();
    this.mapProgressData();
  }

  private generateCalendar(): void {
    this.monthDays = [];
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    this.monthName = this.currentDate.toLocaleString('pt-BR', { month: 'long' });
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startDayOfWeek = firstDayOfMonth.getDay();
    for (let i = 0; i < startDayOfWeek; i++) {
      this.monthDays.push(null);
    }
    for (let day = 1; day <= lastDayOfMonth.getDate(); day++) {
      this.monthDays.push(new Date(year, month, day));
    }
  }

  private mapProgressData(): void {
    this.progressData.forEach(day => {
      this.progressMap.set(day.date, day.level);
    });
  }

  public getProgressLevel(day: Date | null): string | null {
    if (!day) return null;
    const dateString = `${day.getFullYear()}-${String(day.getMonth() + 1).padStart(2, '0')}-${String(day.getDate()).padStart(2, '0')}`;
    return this.progressMap.get(dateString) || null;
  }

  public previousMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.generateCalendar();
  }

  public nextMonth(): void {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.generateCalendar();
  }
}
