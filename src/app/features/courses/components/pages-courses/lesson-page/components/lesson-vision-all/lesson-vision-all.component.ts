import { Component, Input } from '@angular/core';
import { Course, Lesson } from '../../../../../course.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lesson-vision-all',
  imports: [CommonModule],
  templateUrl: './lesson-vision-all.component.html',
  styleUrl: './lesson-vision-all.component.css'
})
export class LessonVisionAllComponent {
  @Input() course: Course | undefined;
  @Input() ActiveLesson: Lesson | undefined;

}
