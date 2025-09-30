import { UserProgressService } from './../../../../../core/services/user/user-service.service';
import { Course } from './../../../../courses/course.model';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CursosService } from '../../../../../core/services/cursos/cursos.service';

type RecentCourseViewModel = Course & { progress$: Observable<number> };

@Component({
  selector: 'app-recentes',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './recentes.component.html',
  styleUrls: ['./recentes.component.css']
})
export class RecentesComponent implements OnInit {
  
  recentCourse$: Observable<RecentCourseViewModel | null> = of(null);

  constructor(
    private cursosService: CursosService,
    private userProgressService: UserProgressService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recentCourse$ = this.userProgressService.getRecentCourseSlug().pipe(
      switchMap(slug => {
        if (!slug) {
          return of(null);
        }
        
        const courseData = this.cursosService.getCourseById(slug);
        if (!courseData) {
          return of(null);
        }

        const courseViewModel: RecentCourseViewModel = {
          ...courseData,
          progress$: this.userProgressService.getCourseProgress(slug)
        };
        return of(courseViewModel);
      })
    );
  }

  viewCourse(slug: string): void {
    if (slug) {
      this.router.navigate(['/cursos', slug]);
      console.log('Botão clicado! Tentando navegar para o slug:', slug); 
    }
  }


  navigateToAllCourses(): void {
    this.router.navigate(['/courses']);
  }
}