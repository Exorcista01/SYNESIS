import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-carrosel',
  imports: [CommonModule],
  templateUrl: './carrosel.component.html',
  styleUrl: './carrosel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarroselComponent implements AfterViewInit{
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  @Input() items: any[] = []; 

  @Input() swiperOptions: any = {
      slidesPerView: 4, 
      spaceBetween: 20,      
      loop: true,
      grabCursor: true,     
  };

  constructor() { }

  ngAfterViewInit(): void {
    const swiper = new Swiper(this.swiperContainer.nativeElement, {
      modules: [Navigation, Pagination],
      
      observer: true,
      observeParents: true,

      centeredSlides: this.swiperOptions.centeredSlides,
      slidesPerView: this.swiperOptions.slidesPerView,
      spaceBetween: this.swiperOptions.spaceBetween,
      loop: this.swiperOptions.loop,
      grabCursor: this.swiperOptions.grabCursor,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }


}
