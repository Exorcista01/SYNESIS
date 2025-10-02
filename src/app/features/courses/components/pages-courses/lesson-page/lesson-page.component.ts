import { Component, OnInit } from '@angular/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { AuthRoutingModule } from "../../../../auth/auth-routing.module";
import { UserProgressService } from '../../../../../core/services/user/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, Lesson , Module } from '../../../course.model';
import { CursosService } from '../../../../../core/services/cursos/cursos.service';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-lesson-page',
  imports: [MatProgressSpinnerModule, MatRadioModule, AuthRoutingModule, ],
  templateUrl: './lesson-page.component.html',
  styleUrl: './lesson-page.component.css'
})
export class LessonPageComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;

  course: Course | undefined;
  ActiveLesson: Lesson | undefined;
  ActiveModule: Module | undefined;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ){}

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params =>{
        const slug = params.get('slug');
        const lessonId = Number(params.get('lessonId'));

        if(slug){
          this.course = this.cursosService.getCourseById(slug);
          if( this.course){
            this.findLessons(lessonId);
          }
        }
        return of(null);
      })
    ).subscribe();
  }

  private findLessons(activeLessonId: number): void {
    if(!this.course || !this.course.modules) return;

    for (const module of this.course.modules){
      if(module.lessons) {
        const foundLesson = module.lessons.find( l => l.id === activeLessonId);
        if(foundLesson) {
          this.ActiveLesson = foundLesson;
          this.ActiveModule = module;
          break
        }
      }
    } 
  }
}
