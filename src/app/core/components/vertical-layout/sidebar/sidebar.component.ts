import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  @Input() isOpen = true;
  @Input() isMobileOpen = false;
  @Output() closeMobileMenuEvent = new EventEmitter<void>();

  currentUser: User | null = null;
  avatarUrl: string | null = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user) => {
      this.currentUser = user;
      this.avatarUrl =
        user?.profile?.avatarUrl ||
        'https://placehold.co/40x40/E2E8F0/4A5568?text=J';
    });

    const userId = this.authService.getCurrentUserId();
    if (userId && !this.authService.currentUserValue) {
      this.authService.getUserById(userId).subscribe();
    }
  }

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
        {
          name: 'Cursos',
          route: '/courses',
          isOpen: false,
          icon: 'fas fa-pen-ruler',
          children: [
            {
              name: 'Visão Geral',
              route: '/courses', 
              icon: 'fas fa-layer-group', 
            },
            {
              name: 'AllCursos',
              route: '/catalogo/todos',
              icon: 'fas fa-book-open',
            },
          ],
        },
        { name: 'Exercice', route: '/Exercise', icon: 'far fa-list-alt' },
      ],
    },
  ];

  navUser = [
    {
      links: [
        {
          name: 'Perfil',
          route: '/Perfil',
          icon: 'fa-regular fa-user',
        },
        {
          name: 'Settings',
          route: '/Settings',
          icon: 'fa-solid fa-gear',
        },
        {
          name: 'Support',
          route: '/Support',
          icon: 'fa-regular fa-circle-question',
        },
        {
          name: 'Logout',
          route: '/Logout',
          icon: 'fa-solid fa-arrow-right-from-bracket',
        },
      ],
    },
  ];

  toggleDropdown(link: any): void {
    link.isOpen = !link.isOpen;
  }

  toggleUserDropdown(): void {
    this.isUserDropdownOpen = !this.isUserDropdownOpen;
  }

  closeMobileMenu(): void {
    this.closeMobileMenuEvent.emit();
  }
}
