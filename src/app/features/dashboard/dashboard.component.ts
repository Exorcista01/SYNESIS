import { Component } from '@angular/core';
import { ProgressDay, CalendaProgressComponent } from './components/calenda-progress/calenda-progress.component';
import { CoursesSectionComponent } from './components/courses-section/courses-section.component';
import { GridStatsComponent } from './components/grid-stats/grid-stats.component';
import { BannerComponent } from "./components/banner/banner.component";



@Component({
  selector: 'app-dashboard',
  imports: [
    CoursesSectionComponent,
    GridStatsComponent,
    BannerComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  userProgress: ProgressDay[] = [
    { date: '2025-09-01', level: 'high' },
    { date: '2025-09-02', level: 'medium' },
    { date: '2025-09-04', level: 'high' },
    { date: '2025-09-09', level: 'low' },
    { date: '2025-09-10', level: 'medium' },
    { date: '2025-09-11', level: 'high' },
    { date: '2025-09-17', level: 'low' },
    { date: '2025-09-18', level: 'high' },
    { date: '2025-09-19', level: 'medium' },
    { date: '2025-09-21', level: 'high' } // Hoje!
  ];

  constructor() { }
}
