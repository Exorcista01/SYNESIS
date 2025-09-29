import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-recentes',
  imports: [MatProgressBarModule],
  templateUrl: './recentes.component.html',
  styleUrl: './recentes.component.css'
})
export class RecentesComponent {
  progressBar: number = 10;
}
