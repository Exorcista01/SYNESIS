import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vertical-layout',
  imports: [
    RouterModule,
    HeaderComponent,
    SidebarComponent,
  ],
  templateUrl: './vertical-layout.component.html',
  styleUrl: './vertical-layout.component.css'
})
export class VerticalLayoutComponent {
  isSidebarOpen = false;

  verificaSidebarOpen(): void{
    this.isSidebarOpen = !this.isSidebarOpen;
    console.log("O pai recebeu o envio do header")
  }
}
