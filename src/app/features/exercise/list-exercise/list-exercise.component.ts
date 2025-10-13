import { Component } from '@angular/core';
import { CategoriaComponent } from "../../../shared/components/categoria/categoria.component";
import { BannerExerciseComponent } from "./banner-exercise/banner-exercise.component";
import { AllExerciseComponent } from "./all-exercise/all-exercise.component";

@Component({
  selector: 'app-list-exercise',
  imports: [CategoriaComponent, BannerExerciseComponent, AllExerciseComponent],
  templateUrl: './list-exercise.component.html',
  styleUrl: './list-exercise.component.css'
})
export class ListExerciseComponent {

}
