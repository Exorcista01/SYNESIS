import { Component, AfterViewInit, ViewChild, ElementRef,} 
from '@angular/core';
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
      img: 'https://placehold.co/600x400/000000/FFF?text=IA',
      title: 'Engenharia de Prompt',
      author: 'Rodrigo...',
      year: '2025',
      tag: 'Manutenção de Computadores'
    },
    {
      img: 'https://placehold.co/600x400/6DB33F/FFF?text=Spring',
      title: 'Microsserviços com Spring Cloud',
      author: 'Fernanda Kipper',
      year: '2025',
      tag: 'Informatica'
    },
    {
      img: 'https://placehold.co/600x400/FFC107/000?text=Comunicação',
      title: 'Comunicação assertiva',
      author: 'Aline Ferreira D...',
      year: '2024',
      tag: 'Redes de computadores'
    },
    {
      img: 'https://placehold.co/600x400/61DAFB/000?text=React+Native',
      title: 'Navegação com Expo Router - React Native',
      author: 'Rodrigo...',
      year: '2024',
      tag: 'React'
    },
    {
      img: 'https://placehold.co/600x400/1E90FF/FFF?text=Dev',
      title: 'Dev Global - Starter Pack',
      author: 'Vinicius de...',
      year: '2025',
      tag: 'Live of Digital'
    },
    {
      img: 'https://placehold.co/600x400/DD0031/FFF?text=Angular',
      title: 'Angular - Curso Introdutório',
      author: 'Vinicius de...',
      year: '2025',
      tag: 'Angular'
    },
    {
      img: 'https://placehold.co/600x400/7B1FA2/FFF?text=Discover',
      title: 'Discover',
      author: 'Mayk Brito',
      year: '2025',
      tag: 'Discover'
    }
  ];
  
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation],

      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
    
      navigation: {
        nextEl: '.swiper-button-next-custom-cards',
        prevEl: '.swiper-button-prev-custom-cards',
      },

      breakpoints: {
        // Para telas com 1024px de largura ou mais
        1600: {
          slidesPerView: 5.3, // Mostra exatamente 5.3 cards
        }
      }
    });

  }
}

