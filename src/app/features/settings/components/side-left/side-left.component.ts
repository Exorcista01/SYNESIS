import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserMenuItem } from '../../../../core/components/vertical-layout/header/user-menu-model';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-left',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './side-left.component.html',
  styleUrl: './side-left.component.css'
})
export class SideLeftComponent {

  constructor(private router: Router) {

  }

  userMenuItems: UserMenuItem[] = [
    { name: 'Perfil', icon: 'fa-regular fa-user', router: '/Settings/Perfil' },
    { name: 'Settings', icon: 'fa-solid fa-gear', router: '/Settings/Account' },
    { name: 'Notification', icon: 'fa-solid fa-comment', router: '/Settings/Notification' },
    { name: 'Logout', icon: 'fa-solid fa-arrow-right-from-bracket', action: () => this.logout()  },
  ] 

  logout() {
    localStorage.clear();
    this.router.navigate(['/Login']);
  }
}
