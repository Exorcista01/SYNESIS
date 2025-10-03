import { Component, Input } from '@angular/core';
import { Course, Lesson } from '../../../../../course.model';

@Component({
  selector: 'app-lesson-content-sidebar',
  imports: [],
  templateUrl: './lesson-content-sidebar.component.html',
  styleUrl: './lesson-content-sidebar.component.css'
})
export class LessonContentSidebarComponent {
  @Input() course: Course | undefined;
  @Input() ActiveLesson: Lesson | undefined;
}
