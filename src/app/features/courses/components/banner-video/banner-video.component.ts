import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 
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
  videoUrl: string;     
  posterUrl: string;
  safeVideoUrl?: SafeResourceUrl; 
  isPlaying?: boolean;
  isMuted?: boolean;
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
  @ViewChildren('videoPlayer') videoPlayers!: QueryList<ElementRef<HTMLVideoElement>>;

  private swiperInstance: Swiper | null = null;

  featuredContent: FeaturedContent[] = [
    {
      badgeText: 'Manutenção de Computadores',
      isRecommended: true,
      title: 'Introdução a Manutenção de Computadores',
      description: 'Aprenda os conceitos fundamentais para montar e consertar computadores, desde o hardware até a instalação de sistemas operacionais.',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
      authorName: 'Enzzo Panerari',
      contentType: 'CURSO - 5H',
      level: 'Intermediário',
      videoUrl: 'assets/videos/pecas.mp4',
      posterUrl: 'assets/videos//img/pcs.png',
    },
    {
      isRecommended: false,
      title: 'Curso Avançado de Redes',
      description: 'Explore protocolos de rede, segurança e configure infraestruturas complexas para ambientes corporativos e data centers.',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
      authorName: 'Juliana Silva',
      contentType: 'CURSO',
      level: 'Avançado',
      videoUrl: 'https://www.pexels.com/download/video/3129540/',
      posterUrl: 'https://images.pexels.com/videos/852421/free-video-852421.jpg?auto=compress&cs=tinysrgb&w=1440&h=150&dpr=1', 
    },
    {
      isRecommended: true,
      title: 'Lógica de Programação para Iniciantes',
      description: 'Dê seus primeiros passos no mundo da programação. Entenda variáveis, laços de repetição e condicionais de forma prática.',
      authorAvatarUrl: 'https://randomuser.me/api/portraits/men/46.jpg',
      authorName: 'Carlos Andrade',
      contentType: 'TUTORIAL',
      level: 'Iniciante',
      videoUrl: 'https://www.pexels.com/download/video/2887463/',
      posterUrl: 'https://images.pexels.com/videos/852421/free-video-852421.jpg?auto=compress&cs=tinysrgb&w=1440&h=150&dpr=1', 
    },
  ];

  constructor(private sanitizer: DomSanitizer) {
    this.featuredContent = this.featuredContent.map(item => ({
      ...item,
      safeVideoUrl: this.sanitizer.bypassSecurityTrustResourceUrl(item.videoUrl),
      isPlaying: false,
      isMuted: true,
    }));
  }

  ngAfterViewInit(): void {
    if (!this.swiperContainer) return;

    this.swiperInstance = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1.05,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: '.swiper-button-next-custom',
        prevEl: '.swiper-button-prev-custom',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        init: (swiper) => {
          this.playActiveVideo(swiper.activeIndex);
        },
        slideChange: (swiper) => {
          this.playActiveVideo(swiper.activeIndex);
        },
      },
    });
  }
  
  private playActiveVideo(activeIndex: number): void {
    this.featuredContent.forEach((item, index) => {
      const videoElement = this.videoPlayers.toArray()[index]?.nativeElement;
      if (!videoElement) return;

      if (index !== activeIndex) {
        videoElement.pause();
        item.isPlaying = false;
      }
    });
  }


  togglePlayPause(index: number): void {
    const item = this.featuredContent[index];
    const videoElement = this.videoPlayers.toArray()[index]?.nativeElement;
    if (!videoElement) return;

    if (videoElement.paused) {
      videoElement.play();
      item.isPlaying = true;
    } else {
      videoElement.pause();
      item.isPlaying = false;
    }
  }

  toggleMute(index: number): void {
    const item = this.featuredContent[index];
    item.isMuted = !item.isMuted;
  }
}