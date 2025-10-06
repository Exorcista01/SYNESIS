import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-carrosel',
  imports: [CommonModule, RouterLink],
  templateUrl: './carrosel.component.html',
  styleUrl: './carrosel.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarroselComponent implements AfterViewInit {
  @Input() items: any[] = [];   
  @Input() title: string = ''; 
  @ViewChild('swiperContainer') swiperContainer!: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.swiperContainer) {
      const swiper = new Swiper(this.swiperContainer.nativeElement, {
        modules: [Navigation],

        observer: true,
        observeParents: true,
        slidesPerView: 'auto',
        spaceBetween: 20,

        navigation: {
          nextEl: '.carrosel-button-next',
          prevEl: '.carrosel-button-prev',
        },

      breakpoints: {
          1600: {
            slidesPerView: 4.2,
          }
        }
      });
    }
  }


}
