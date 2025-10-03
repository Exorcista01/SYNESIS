import { Component, Input } from '@angular/core';
import { Course, Lesson } from '../../../../../course.model';


@Component({
  selector: 'app-lesson-vision-all',
  imports: [],
  templateUrl: './lesson-vision-all.component.html',
  styleUrl: './lesson-vision-all.component.css'
})
export class LessonVisionAllComponent {
  @Input() course: Course | undefined;
  @Input() ActiveLesson: Lesson | undefined;

}
