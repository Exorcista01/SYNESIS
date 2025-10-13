import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserMenuItem } from './user-menu-model';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-header',
  imports: [RouterModule, FormsModule, MatSlideToggleModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  searchValue: string = '';
  currentUser: User | null = null;
  avatarUrl: string | null = null;

  constructor(private router: Router, 
    private elRef: ElementRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.avatarUrl = user?.profile?.avatarUrl || 'https://placehold.co/40x40/E2E8F0/4A5568?text=J';
    });

    const userId = this.authService.getCurrentUserId(); // Supondo que você tenha essa função
    if (userId) {
      this.authService.getUserById(userId).subscribe();
    }
  }

  searchClear(): void {
    this.searchValue = '';
  }

  @Output() SidebarToggleEvent = new EventEmitter<void>();

  ToggleOpen(): void {
    console.log('Menu aberto');

    this.SidebarToggleEvent.emit();
  }

  isDarkMode = false;

  changeTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    document.body.classList.toggle('dark-mode');
  }

  navMenuModal = false;

  navModalOpen(): void {
    this.navMenuModal = !this.navMenuModal;
  }

  userMenuItems: UserMenuItem[] = [
    { name: 'Perfil', icon: 'fa-regular fa-user', router: '/Settings/Perfil' },
    { name: 'Settings', icon: 'fa-solid fa-gear', router: '/Settings/Account' },
    { name: 'Calendario', icon: 'far fa-calendar-alt', router: '/Calendario' },
    {name: 'Logout', icon: 'fa-solid fa-arrow-right-from-bracket', action: () => this.logout(),},
  ];

  logout() {
    localStorage.clear();
    this.router.navigate(['/Login']);
  }
  
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside && this.navMenuModal) {
      this.navMenuModal = false;
    }
  }
}
