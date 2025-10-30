import { Component, inject, OnInit } from '@angular/core';
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
import { AuthService } from '../../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../../../../core/models/user.model';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-main',
  imports: [
    CalendaProgressComponent,
    GridStatsComponent,
    CarroselComponent,
    RecentesComponent,
    SharedModule,
    AsyncPipe
],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  cursosRecentes: Course[] = [];
  cursosPopulares: Course[] = [];
  private authService = inject(AuthService)

  public user$: Observable<User | null> = this.authService.currentUser$;

  constructor(private cursosService: CursosService) {}

  ngOnInit(): void {
    this.cursosService.getCardSections().subscribe((todasSecoes) => {
      if (todasSecoes.length > 0) {
        this.cursosRecentes = todasSecoes[0].courses;
      }
      if (todasSecoes.length > 1) {
        this.cursosPopulares = todasSecoes[1].courses;
      }
    });
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
