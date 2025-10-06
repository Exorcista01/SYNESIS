import { Component, Input } from '@angular/core';
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
  @Input() ActiveModule: Module | undefined;
}
