import { Component, AfterViewInit, ViewChild, ElementRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';


@Component({
  selector: 'app-mini-cards',
  imports: [CommonModule],
  templateUrl: './mini-cards.component.html',
  styleUrl: './mini-cards.component.css',
})
export class MiniCardsComponent implements AfterViewInit{
  
  courses = [
    {
      icon: 'assets/icons/prompt-icon.svg',
      title: 'Engenharia de Prompt',
      author: 'Rodrigo...',
      year: '2025',
      tag: 'GRÁTIS ATÉ 29/09'
    },
    {
      icon: 'assets/icons/spring-icon.svg',
      title: 'Microsserviços com Spring Cloud',
      author: 'Fernanda Kipper',
      year: '2025',
      tag: 'GRÁTIS ATÉ 29/09'
    },
    {
      icon: 'assets/icons/comunicacao-icon.svg',
      title: 'Comunicação assertiva',
      author: 'Aline Ferreira D...',
      year: '2024',
      tag: 'GRÁTIS ATÉ 29/09'
    },
    {
      icon: 'assets/icons/react-native-icon.svg',
      title: 'Navegação com Expo Router - React Native',
      author: 'Rodrigo...',
      year: '2024',
      tag: 'GRÁTIS ATÉ 29/09'
    },
    {
      icon: 'assets/icons/web-icon.svg',
      title: 'Dev Global - Starter Pack',
      author: 'Vinicius de...',
      year: '2025',
      tag: 'GRÁTIS'
    },
    {
      icon: 'assets/icons/angular-icon.svg',
      title: 'Angular - Curso Introdutório',
      author: 'Vinicius de...',
      year: '2025',
      tag: 'GRÁTIS'
    },
    {
      icon: 'assets/icons/discover-icon.svg',
      title: 'Discover',
      author: 'Mayk Brito',
      year: '2025',
      tag: 'GRÁTIS'
    }
  ];

  
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;


  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper(this.swiperContainer.nativeElement, {
      
      modules: [Navigation],

      
      slidesPerView: 3,
      spaceBetween: 24,
      
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },


      
    });
  }
}

