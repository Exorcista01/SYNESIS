import { Component, AfterViewInit, ViewChild, ElementRef, Input,} 
from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-mini-cards',
  imports: [CommonModule, RouterLink],
  templateUrl: './mini-cards.component.html',
  styleUrl: './mini-cards.component.css',
})
export class MiniCardsComponent implements AfterViewInit{
  @Input() title: string = "padrao";
  @Input() courses: any[] = [];
  

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

