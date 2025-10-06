import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UserMenuItem } from './user-menu-model';


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


    constructor( private router: Router) {};

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

  userMenuItems: UserMenuItem[] = [
    { name: 'Settings', icon: 'fa-solid fa-gear', router:'/Settings' },
    { name: 'Perfil', icon: 'fa-regular fa-user', router: '/Perfil' },
    { name: 'Calendario', icon: 'far fa-calendar-alt', router: '/Calendario' },
    { name: 'Logout', icon: 'fa-solid fa-arrow-right-from-bracket', action:() => this.logout()  },
  ]

  logout() {
    localStorage.clear();
    this.router.navigate(['/Login']);
  }
}
