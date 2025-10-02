import { Component, HostListener, OnInit} from '@angular/core';
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
  public isSidebarOpen = false;
  public isMobileMenuOpen = false;
  private screenWidth!: number;

  constructor() {}


  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 1025) {
      this.isMobileMenuOpen = false;
    }
  }

  verificaSidebarOpen(): void {
    if (this.screenWidth <= 1025) {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    } else {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
  
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
