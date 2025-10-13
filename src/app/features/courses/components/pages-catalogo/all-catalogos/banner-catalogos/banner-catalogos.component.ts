import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner-catalogos',
  imports: [],
  templateUrl: './banner-catalogos.component.html',
  styleUrl: './banner-catalogos.component.css'
})
export class BannerCatalogosComponent {
  @Input() urlDaImagem: string = 'backgraund-banner.png';
}
