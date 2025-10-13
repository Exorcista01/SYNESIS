import { Component, OnInit } from '@angular/core';
import {
  CalendaProgressComponent,
  ProgressDay,
} from './calenda-progress/calenda-progress.component';
import { GridStatsComponent } from './grid-stats/grid-stats.component';
import { CarroselComponent } from '../../../../shared/components/carrosel/carrosel.component';
import { SharedModule } from '../../../../shared/shared.mudule';
import { RecentesComponent } from './recentes/recentes.component';
import { CursosService } from '../../../../core/services/cursos/cursos.service';
import { Course } from '../../../courses/course.model';

@Component({
  selector: 'app-main',
  imports: [
    CalendaProgressComponent,
    GridStatsComponent,
    CarroselComponent,
    SharedModule,
    RecentesComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  cursosRecentes: Course[] = [];
  cursosPopulares: Course[] = [];

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    const todasSecoes = this.cursosService.getCardSections();

    if (todasSecoes.length > 0) {
      this.cursosRecentes = todasSecoes[0].courses; 
    }
    if (todasSecoes.length > 1) {
      this.cursosPopulares = todasSecoes[1].courses; 
    }
  }

  userProgress: ProgressDay[] = [
    { date: '2025-09-01', status: 'completed' },
    { date: '2025-09-02', status: 'completed' },
    { date: '2025-09-04', status: 'completed' },
    { date: '2025-09-08', status: 'completed' },
    { date: '2025-09-10', status: 'completed' },
    { date: '2025-09-11', status: 'completed' },
    { date: '2025-09-15', status: 'completed' },
    { date: '2025-09-18', status: 'completed' },
  ];
}
