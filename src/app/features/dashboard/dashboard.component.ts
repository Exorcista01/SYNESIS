import { Component } from '@angular/core';
import { ProgressDay,  } from './components/main/calenda-progress/calenda-progress.component';
import { MainComponent } from "./components/main/main.component";



@Component({
  selector: 'app-dashboard',
  imports: [
    MainComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

}
