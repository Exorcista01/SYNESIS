import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course, Lesson, Module } from '../../../../../course.model';
import { RouterModule } from '@angular/router';
import { AsiderCourseComponent } from "../asider-course/asider-course.component";

@Component({
  selector: 'app-lesson-content-sidebar',
  imports: [RouterModule, AsiderCourseComponent],
  templateUrl: './lesson-content-sidebar.component.html',
  styleUrl: './lesson-content-sidebar.component.css'
})
export class LessonContentSidebarComponent {
  // --- DADOS RECEBIDOS DO PAI ---
  @Input() course: Course | undefined;
  @Input() ActiveLesson: Lesson | undefined;
  @Input() expandedModules: { [key: number]: boolean } = {};
  
  // Supondo que o pai passe um Set com os IDs das aulas completas
  @Input() completedLessons = new Set<number>(); 

  // --- EVENTO ENVIADO PARA O PAI ---
  @Output() toggleModuleEvent = new EventEmitter<number>();

  // Método que avisa o pai quando um módulo é clicado
  onToggleModule(moduleOrder: number): void {
    this.toggleModuleEvent.emit(moduleOrder);
  }

  // Helper para verificar no template se um módulo está expandido
  isModuleExpanded(moduleOrder: number): boolean {
    return this.expandedModules[moduleOrder] || false;
  }

  // Helper para verificar se a aula foi concluída
  isLessonCompleted(lessonId: number): boolean {
    return this.completedLessons.has(lessonId);
  }

  // Helper para calcular o total de aulas em um módulo
  getTotalLessonsInModule(module: Module): number {
    return module.lessons?.length || 0;
  }
}
