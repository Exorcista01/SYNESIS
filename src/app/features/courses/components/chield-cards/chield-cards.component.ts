import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-chield-cards',
  imports: [RouterModule],
  templateUrl: './chield-cards.component.html',
  styleUrl: './chield-cards.component.css'
})
export class ChieldCardsComponent implements AfterViewInit {
   @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  minoInfo = [
  {
    slug: 'Lógica de Programação',
    miniImg: 'assets/miniCards/logic.png',
    miniTitle: 'Lógica'
  },
  {
    slug: 'Java Script',
    miniImg: 'assets/miniCards/js.png',
    miniTitle: 'Java Script'
  },
  {
    slug: 'Html',
    miniImg: 'assets/miniCards/php.png',
    miniTitle: 'Html'
  },
  {
    slug: 'CSS',
    miniImg: 'assets/miniCards/responsive-design.png',
    miniTitle: 'CSS'
  },

  {
    slug: 'Redes de Computadores',
    miniImg: 'assets/miniCards/conexao-de-rede.png',
    miniTitle: 'Redes'
  },
  {
    slug: 'Manutenção de Computadores',
    miniImg: 'assets/miniCards/computador.png',
    miniTitle: 'Manutenção de Pcs'
  },
  {
    slug: 'Tecnologia da Informação',
    miniImg: 'assets/miniCards/ti.png',
    miniTitle: 'TI'
  },
  {
    slug: 'Matematica',
    miniImg: 'assets/miniCards/calculating.png',
    miniTitle: 'Matematica'
  },
];

ngAfterViewInit(): void {
    const swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation],
      
      slidesPerView: 'auto',
      spaceBetween: 16,

      navigation: {
        nextEl: '.swiper-button-next-mini',
        prevEl: '.swiper-button-prev-mini',
      },
    });
  }

}
