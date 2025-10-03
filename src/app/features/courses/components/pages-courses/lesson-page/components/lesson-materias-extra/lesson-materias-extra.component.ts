import { Component, Input } from '@angular/core';
import { Course, Lesson } from '../../../../../course.model';

@Component({
  selector: 'app-lesson-materias-extra',
  imports: [],
  templateUrl: './lesson-materias-extra.component.html',
  styleUrl: './lesson-materias-extra.component.css'
})
export class LessonMateriasExtraComponent {
  @Input() course: Course | undefined;
  @Input() ActiveLesson: Lesson | undefined;
}
