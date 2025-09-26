import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
            { name: 'To-do', route: '/', icon: 'fas fa-list-check' },
            { name: 'Pomodoro', route: '/', icon: 'far fa-comments' },
          ],
        },
      ],
    },
    {
      title: 'Cursos & Exercice',
      links: [
        { name: 'Cursos', route: '/courses', icon: 'fas fa-pen-ruler' },
        { name: 'Exercice', route: '/forms-tables', icon: 'far fa-list-alt' },
        { name: 'Certificados', route: '/charts', icon: 'fas fa-chart-pie' },
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

  toggleDropdown(link: any): void {
    link.isOpen = !link.isOpen;
  };


  public isMobileMenuOpen = false;

  isUserDropdownOpen = false;

  toggleUserDropdown(): void {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  };

  // Chame esta função a partir do seu botão "hamburger" no header
  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  // Esta função será usada pelo overlay para fechar o menu
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }

  @Input() isOpen = true;

  constructor() { }
}
