import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isOpen = true;
  @Input() isMobileOpen = false; 
  @Output() closeMobileMenuEvent = new EventEmitter<void>();

  isUserDropdownOpen = false;

  navSections = [
    {
      title: 'Dashboard & Apps',
      links: [
        {
          name: 'Dashboard',
          route: '/dashboard',
          icon: 'fas fa-table-cells-large',
        },
        {
          name: 'Apps',
          route: '/apps',
          icon: 'fas fa-grip',
          isOpen: false,
          children: [
            {
              name: 'Calenda',
              route: '/Calendario',
              icon: 'far fa-calendar-alt',
            },
            { name: 'Pomodoro', route: '/Pomodoro', icon: 'far fa-comments' },
          ],
        },
      ],
    },
    {
      title: 'Cursos & Exercice',
      links: [
        { name: 'Cursos', route: '/courses', icon: 'fas fa-pen-ruler' },
        { name: 'Exercice', route: '/Exercise', icon: 'far fa-list-alt' },
      ],
    },
  ];

  navUser = [
    {
      links:  [
        {
          name: 'Perfil',
          route: '/Perfil',
          icon: 'fa-regular fa-user'
        },
        {
          name: 'Settings',
          route: '/Settings',
          icon: 'fa-solid fa-gear'
        },
        {
          name: 'Support',
          route: '/Support',
          icon: 'fa-regular fa-circle-question'
        },
        {
          name: 'Logout',
          route: '/Logout',
          icon: 'fa-solid fa-arrow-right-from-bracket'
        }
      ],
    },
  ];

   constructor() { }

   toggleDropdown(link: any): void {
    link.isOpen = !link.isOpen;
  }

  toggleUserDropdown(): void {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  
  closeMobileMenu(): void {
     this.closeMobileMenuEvent.emit()
  }

}
