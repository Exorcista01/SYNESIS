import { Component, Input } from '@angular/core';
import { Course, Lesson } from '../../../../../course.model';
@Component({
  selector: 'app-transcription',
  imports: [],
  templateUrl: './transcription.component.html',
  styleUrl: './transcription.component.css'
})
export class TranscriptionComponent {
  @Input() course: Course | undefined;
  @Input() ActiveLesson: Lesson | undefined;
}
