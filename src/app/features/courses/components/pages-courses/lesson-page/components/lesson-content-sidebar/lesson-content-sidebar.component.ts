import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course, Lesson, Module } from '../../../../../course.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lesson-content-sidebar',
  imports: [RouterModule],
  templateUrl: './lesson-content-sidebar.component.html',
  styleUrl: './lesson-content-sidebar.component.css'
})
export class LessonContentSidebarComponent {
  @Input() course: Course | undefined;
  @Input() ActiveLesson: Lesson | undefined;
  @Input() expandedModules: { [key: number]: boolean } = {};
  
  @Input() completedLessons = new Set<number>(); 

  @Output() toggleModuleEvent = new EventEmitter<number>();

  onToggleModule(moduleOrder: number): void {
    this.toggleModuleEvent.emit(moduleOrder);
  }

  isModuleExpanded(moduleOrder: number): boolean {
    return this.expandedModules[moduleOrder] || false;
  }

  isLessonCompleted(lessonId: number): boolean {
    return this.completedLessons.has(lessonId);
  }

  getTotalLessonsInModule(module: Module): number {
    return module.lessons?.length || 0;
  }
}
