import { Component } from '@angular/core';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { CommonModule, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-grid-stats',
  imports: [StatsCardComponent, CommonModule,],
  templateUrl: './grid-stats.component.html',
  styleUrl: './grid-stats.component.css'
})
export class GridStatsComponent {
  stats = [
    {
      icon: 'fa-solid fa-graduation-cap',
      colorClass: 'icon-blue',
      value: '4',
      label: 'Cursos Completos', 
      path: 'M 0 30 Q 25 10, 50 30 T 100 20',
      gradientId: 'blueGradient',
      gradientColor: '#0066ff',
      strokeColor: '#0066ff'
    },
    {
      icon: 'fa-solid fa-list-check', 
      colorClass: 'icon-green',
      value: '7',
      label: 'Exercícios Concluídos',
      path: 'M 0 25 Q 15 45, 30 25 T 60 30 T 90 15 L 100 20',
      gradientId: 'greenGradient',
      gradientColor: '#10c469',
      strokeColor: '#10c469'
    },
    {
      icon: 'fa-solid fa-bars-progress',
      colorClass: 'icon-cyan',
      value: '2',
      label: 'Cursos em Progresso', 
      path: 'M 0 35 Q 15 10, 30 35 T 60 20 T 90 40 L 100 30',
      gradientId: 'cyanGradient',
      gradientColor: '#00b8d4',
      strokeColor: '#00b8d4'
    },
    {
      icon: 'fa-solid fa-clock', 
      colorClass: 'icon-orange',
      value: '12',
      label: 'Horas de Estudo',
      path: 'M 0 30 Q 15 48, 30 30 T 60 25 T 90 15 L 100 25',
      gradientId: 'orangeGradient',
      gradientColor: '#ff9f1c',
      strokeColor: '#ff9f1c'
    }
  ];
}
