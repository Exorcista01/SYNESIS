import { Navigation } from 'swiper/modules';
import { Component, Input, OnInit } from '@angular/core';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { UserProgressService } from '../../../../../core/services/user/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, Lesson , Module } from '../../../course.model';
import { CursosService } from '../../../../../core/services/cursos/cursos.service';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { NavigationContentComponent } from "./components/navigation-content/navigation-content.component";
import { LessonVisionAllComponent } from "./components/lesson-vision-all/lesson-vision-all.component";
import { LessonContentSidebarComponent } from "./components/lesson-content-sidebar/lesson-content-sidebar.component";
import { LessonMateriasExtraComponent } from "./components/lesson-materias-extra/lesson-materias-extra.component";
import { TranscriptionComponent } from "./components/transcription/transcription.component";
import { AsiderCourseComponent } from "./components/asider-course/asider-course.component";


@Component({
  selector: 'app-lesson-page',
  imports: [
    MatProgressSpinnerModule, 
    MatRadioModule, 
    NavigationContentComponent, 
    LessonVisionAllComponent, 
    LessonContentSidebarComponent, 
    LessonMateriasExtraComponent, 
    TranscriptionComponent, 
    AsiderCourseComponent],
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
  private allLessons: Lesson[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursosService: CursosService
  ){}

 ngOnInit(): void {
  this.route.paramMap.pipe(
    switchMap(params => {
      const slug = params.get('slug');
      const lessonId = Number(params.get('lessonId'));

      if (slug) {
        return this.cursosService.getCourseById(slug).pipe(
          map(course => ({ course, lessonId })) 
        );
      }
      return of({ course: undefined, lessonId: 0 });
    })
  )
  .subscribe(({ course, lessonId }) => {
    this.course = course;
    if (this.course) {
      this.findLessons(lessonId);
    }
  });
}

  private findLessons(activeLessonId: number): void {
    if(!this.course || !this.course.modules) return;

    this.allLessons = this.course.modules.flatMap(module => module.lessons || []); // <-- ADICIONE ESTA LINHA

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

  goToNextLesson(): void {
    if (!this.ActiveLesson || !this.course) return;

    const currentIndex = this.allLessons.findIndex(lesson => lesson.id === this.ActiveLesson?.id);

    if (currentIndex > -1 && currentIndex < this.allLessons.length - 1) {
      const nextLesson = this.allLessons[currentIndex + 1];
      this.router.navigate(['/cursos', this.course.slug, 'lesson', nextLesson.id]);
    }
  }

  goToPreviousLesson(): void {
    if (!this.ActiveLesson || !this.course) return;

    const currentIndex = this.allLessons.findIndex(lesson => lesson.id === this.ActiveLesson?.id);

    if (currentIndex > 0) {
      const previousLesson = this.allLessons[currentIndex - 1];
      this.router.navigate(['/cursos', this.course.slug, 'lesson', previousLesson.id]);
    }
  }
}
