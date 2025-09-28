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
    // NOVO: Define o tamanho da tela na inicialização
    this.screenWidth = window.innerWidth;
  }

  // NOVO: Escuta o evento de redimensionamento da janela
  @HostListener('window:resize', ['$event'])
  onResize(event?: Event) {
    this.screenWidth = window.innerWidth;
    // Se a tela ficar grande, fecha o menu mobile para evitar bugs visuais
    if (this.screenWidth > 1025) {
      this.isMobileMenuOpen = false;
    }
  }

  // MODIFICADO: Esta função agora é o nosso "cérebro"
  verificaSidebarOpen(): void {
    if (this.screenWidth <= 1025) {
      // Em telas pequenas, controla o menu GAVETA
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    } else {
      // Em telas grandes, controla o menu MINI
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
  
  // NOVO: Função para fechar o menu mobile (será usada pelo overlay)
  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
