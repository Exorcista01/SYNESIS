import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export interface FeaturedContent {
  badgeText?: string;
  isRecommended: boolean;
  title: string;
  description: string;
  authorAvatarUrl: string;
  authorName: string;
  contentType: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  videoImageUrl: string;
}

@Component({
  selector: 'app-banner-video',
  imports: [CommonModule],
  templateUrl: './banner-video.component.html',
  styleUrl: './banner-video.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BannerVideoComponent implements AfterViewInit {
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    if (!this.swiperContainer) return;

    const swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation, Pagination],

      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCursor: true,


      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  featuredContent: FeaturedContent[] = [
    {
      badgeText: 'GRÁTIS ATÉ 26/09',
      isRecommended: true,
      title: 'Introdução a Manutenção de Computadores',
      description:
        'Aprenda os conceitos fundamentais para montar e consertar computadores, desde o hardware até a instalação de sistemas operacionais.',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      authorName: 'Enzzo Panerari',
      contentType: 'CURSO',
      level: 'Intermediário',
      videoImageUrl:
        'https://images.unsplash.com/photo-1575789930778-66f20d18a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29tcHV0ZXIsbWFpbnRlbmFuY2V8fHx8fHwxNzI3MjI5NTI4&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
    {
      isRecommended: false,
      title: 'Curso Avançado de Redes',
      description:
        'Explore protocolos de rede, segurança e configure infraestruturas complexas para ambientes corporativos e data centers.',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      authorName: 'Juliana Silva',
      contentType: 'CURSO',
      level: 'Avançado',
      videoImageUrl:
        'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8bmV0d29yayxjb21wdXRlcnx8fHx8fDE3MjcyMjk1NTg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
    {
      isRecommended: true,
      title: 'Lógica de Programação para Iniciantes',
      description:
        'Dê seus primeiros passos no mundo da programação. Entenda variáveis, laços de repetição e condicionais de forma prática.',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
      authorName: 'Carlos Andrade',
      contentType: 'TUTORIAL',
      level: 'Iniciante',
      videoImageUrl:
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y29kaW5nLHByb2dyYW1taW5nfHx8fHx8MTcyNzIyOTU4Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
    },
  ];
}
