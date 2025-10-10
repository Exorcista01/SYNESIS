import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-exercise',
  imports: [],
  templateUrl: './banner-exercise.component.html',
  styleUrl: './banner-exercise.component.css'
})
export class BannerExerciseComponent {
    @Input() urlDaImagem: string = 'backgraund-banner.png';
}
