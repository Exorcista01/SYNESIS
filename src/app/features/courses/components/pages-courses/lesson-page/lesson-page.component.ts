import { Navigation } from 'swiper/modules';
import { Component, Input, OnInit } from '@angular/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { AuthRoutingModule } from "../../../../auth/auth-routing.module";
import { UserProgressService } from '../../../../../core/services/user/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, Lesson , Module } from '../../../course.model';
import { CursosService } from '../../../../../core/services/cursos/cursos.service';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { NavigationContentComponent } from "./components/navigation-content/navigation-content.component";
import { LessonVisionAllComponent } from "./components/lesson-vision-all/lesson-vision-all.component";
import { LessonContentSidebarComponent } from "./components/lesson-content-sidebar/lesson-content-sidebar.component";
import { LessonMateriasExtraComponent } from "./components/lesson-materias-extra/lesson-materias-extra.component";
import { TranscriptionComponent } from "./components/transcription/transcription.component";


@Component({
  selector: 'app-lesson-page',
  imports: [MatProgressSpinnerModule, MatRadioModule, AuthRoutingModule, NavigationContentComponent, LessonVisionAllComponent, LessonContentSidebarComponent, LessonMateriasExtraComponent, TranscriptionComponent],
  templateUrl: './lesson-page.component.html',
  styleUrl: './lesson-page.component.css'
})
export class LessonPageComponent implements OnInit {
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  expandedModules: { [key: number]: boolean } = {};
  course: Course | undefined;
  ActiveLesson: Lesson | undefined;
  ActiveModule: Module | undefined;
  proximoLesson: boolean = false;
  anteriorLesson: boolean = false;
  @Input() toggleButtonSidebar = false;
  activeTab: string = 'Visão-Geral';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

      if (this.ActiveModule) {
        this.expandedModules = {}; 
        this.expandedModules[this.ActiveModule.order] = true;
      }
      }
    } 
  }

  toggleModule(moduleOrder: number): void {
    const wasOpen = this.expandedModules[moduleOrder];
    this.expandedModules = {}; 
    if (!wasOpen) {
      this.expandedModules[moduleOrder] = true;
    }
  }

  isModuleExpanded(moduleOrder: number): boolean {
    return this.expandedModules[moduleOrder] || false;
  }

  viewCurse(): void {
    if(this.course){
      this.router.navigate(['/cursos', this.course.slug]);

    }
  }

 toggleOpen(): void {
  this.toggleButtonSidebar = !this.toggleButtonSidebar;
 }

  setActiveTab(tabName: string): void {
    this.activeTab = tabName
  }
}
