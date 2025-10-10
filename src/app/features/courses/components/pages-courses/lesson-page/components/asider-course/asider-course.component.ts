import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Course, Lesson, Module } from '../../../../../course.model';

@Component({
  selector: 'app-asider-course',
  imports: [CommonModule, RouterModule],
  templateUrl: './asider-course.component.html',
  styleUrl: './asider-course.component.css'
})
export class AsiderCourseComponent {
  @Input() course: Course | undefined;
  @Input() ActiveLesson: Lesson | undefined;
  @Input() toggleButtonSidebar: boolean = false;
  @Input() expandedModules: { [key: number]: boolean } = {};

  @Output() closeSidebar = new EventEmitter<void>();
  @Output() toggleModuleEvent = new EventEmitter<number>();
  @Output() backToCourse = new EventEmitter<void>();


  onClose(): void {
    this.closeSidebar.emit();
  }

  onToggleModule(moduleOrder: number): void {
    this.toggleModuleEvent.emit(moduleOrder);
  }

  onBackToCourse(): void {
    this.backToCourse.emit();
  }

  isModuleExpanded(moduleOrder: number): boolean {
    return this.expandedModules[moduleOrder] || false;
  }
}