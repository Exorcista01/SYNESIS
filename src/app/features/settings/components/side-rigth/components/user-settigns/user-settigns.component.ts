import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthRoutingModule } from "../../../../../auth/auth-routing.module";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-settigns',
  imports: [CommonModule, AuthRoutingModule, RouterModule],
  templateUrl: './user-settigns.component.html',
  styleUrl: './user-settigns.component.css'
})
export class UserSettignsComponent {
  currentTheme: 'light' | 'dark' = 'light';

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      this.setTheme(savedTheme);
    } else {
      this.setTheme('light');
    }
  }

  setTheme(theme: 'light' | 'dark'): void {
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;

    if (theme === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
