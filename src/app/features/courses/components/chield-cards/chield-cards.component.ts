import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

@Component({
  selector: 'app-chield-cards',
  imports: [],
  templateUrl: './chield-cards.component.html',
  styleUrl: './chield-cards.component.css'
})
export class ChieldCardsComponent implements AfterViewInit {
   @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  minoInfo = [
  {
    miniImg: 'assets/miniCards/logic.png',
    miniTitle: 'Lógica'
  },
  {
    miniImg: 'assets/miniCards/js.png',
    miniTitle: 'JavaScript'
  },
  {
    miniImg: 'assets/miniCards/php.png',
    miniTitle: 'PHP'
  },
  {
    miniImg: 'assets/miniCards/responsive-design.png',
    miniTitle: 'Design Responsivo'
  },
  {
    miniImg: 'assets/miniCards/dados.png',
    miniTitle: 'Banco de Dados'
  },
  {
    miniImg: 'assets/miniCards/conexao-de-rede.png',
    miniTitle: 'Redes'
  },
  {
    miniImg: 'assets/miniCards/computador.png',
    miniTitle: 'Manutenção'
  },
  {
    miniImg: 'assets/miniCards/app-development.png',
    miniTitle: 'Desenvolvimento'
  },
  {
    miniImg: 'assets/miniCards/computador.png',
    miniTitle: 'Manutenção'
  },
  {
    miniImg: 'assets/miniCards/computador.png',
    miniTitle: 'Manutenção'
  },
  {
    miniImg: 'assets/miniCards/computador.png',
    miniTitle: 'Manutenção'
  },
  {
    miniImg: 'assets/miniCards/computador.png',
    miniTitle: 'Manutenção'
  },

  {
    miniImg: 'assets/miniCards/computador.png',
    miniTitle: 'Manutenção'
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
