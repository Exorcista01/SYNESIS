import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

interface userMenuitem {
  name: string,
  icon: string,
  router: string,
}

@Component({
  selector: 'app-header',
  imports: [
    RouterModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  searchValue: string  = "";


    constructor() {};

    searchClear(): void{
      this.searchValue = "";
    };

    @Output() SidebarToggleEvent = new EventEmitter<void>;

    ToggleOpen (): void {
      console.log("Menu aberto");

      this.SidebarToggleEvent.emit();
    };


    isDarkMode = false;

    changeTheme(): void {
      this.isDarkMode = !this.isDarkMode;

      document.body.classList.toggle('dark-mode')
    }
    
    navMenuModal = false;

    navModalOpen(): void{
      this.navMenuModal = !this.navMenuModal;
    }

  userMenuItems: userMenuitem[] = [
    { name: 'Settings', icon: 'fa-solid fa-gear', router:'/Settings' },
    { name: 'Perfil', icon: 'fa-regular fa-user', router: '/Perfil' },
    { name: 'Logout', icon: 'fa-solid fa-arrow-right-from-bracket', router: '/Logout' },
    { name: 'Login', icon: 'fa-solid fa-arrow-right-from-bracket', router: '/Login' }
  ]
}
