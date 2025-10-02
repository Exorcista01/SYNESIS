import { NgClass, AsyncPipe } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Course } from '../../../../course.model';
import { Observable, of } from 'rxjs';
import { UserProgressService } from '../../../../../../core/services/user/user-service.service';

@Component({
  selector: 'app-vision-all',
  standalone: true,
  imports: [NgClass, AsyncPipe, RouterModule],
  templateUrl: './vision-all.component.html',
  styleUrl: './vision-all.component.css'
})
export class VisionAllComponent {
  @Input() course: Course | undefined;

  completedLessons$: Observable<Set<number>> = of(new Set<number>());
  
  courseProgress$: Observable<number> = of(0); 

  isCollapsed = true;
  expandedModules: { [key: number]: boolean } = {};

  constructor(
    private userProgressService: UserProgressService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course'] && this.course) {
      this.completedLessons$ = this.userProgressService.getCompletedLessons(this.course.slug);
      this.courseProgress$ = this.userProgressService.getCourseProgress(this.course.slug);
    }
  }

  startCourse(): void {
    if (this.course) {
      this.userProgressService.setRecentCourse(this.course.slug);
      this.router.navigate(['/dashboard']);
    }
  }

  completeLesson(lessonId: number): void {
    if (this.course) {
      this.userProgressService.toggleLessonComplete(this.course.slug, lessonId);
    }
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  toggleModule(moduleOrder: number): void {
    this.expandedModules[moduleOrder] = !this.expandedModules[moduleOrder];
  }

  isModuleExpanded(moduleOrder: number): boolean {
    return this.expandedModules[moduleOrder] || false;
  }

  startModuleLearning(event: MouseEvent, moduleOrder: number): void {
    event.stopPropagation(); 
    console.log(`Botão 'Start Learning' clicado para o Módulo ${moduleOrder}!`);
  }
}