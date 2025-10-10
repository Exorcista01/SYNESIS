import { Component } from '@angular/core';
import { ListExerciseComponent } from "./list-exercise/list-exercise.component";

@Component({
  selector: 'app-exercise',
  imports: [ListExerciseComponent],
  templateUrl: './exercise.component.html',
  styleUrl: './exercise.component.css'
})
export class ExerciseComponent {

}
