import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})

export class BannerComponent {

  @Input() userName: string = 'Jorge';
  @Input() tituloPrincipal: string = 'O que você quer';
  @Input() palavraEmDestaque: string = 'Aprender';
  @Input() subtitulo: string = 'Discover courses, track progress, and achieve your learning goals seamlessly.';
  @Input() textoDoBotao: string = 'Explore Courses';
  @Input() urlDaImagem: string = 'backgraund-banner.png';
}
