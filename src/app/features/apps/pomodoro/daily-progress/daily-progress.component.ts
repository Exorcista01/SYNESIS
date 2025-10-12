import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-daily-progress',
  imports: [CommonModule, DatePipe],
  templateUrl: './daily-progress.component.html',
  styleUrl: './daily-progress.component.css'
})
export class DailyProgressComponent {
  date = new Date();

  @Input() completedCount: number = 0;
  @Input() totalCount: number = 0;
  @Input() percentage: number = 0;

}

