import { Component } from '@angular/core';
import { SideLeftComponent } from "./components/side-left/side-left.component";
import { SideRigthComponent } from "./components/side-rigth/side-rigth.component";

@Component({
  selector: 'app-settings',
  imports: [SideLeftComponent, SideRigthComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  
}
