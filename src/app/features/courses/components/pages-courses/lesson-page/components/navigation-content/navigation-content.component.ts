import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';


@Component({
  selector: 'app-navigation-content',
  imports: [],
  templateUrl: './navigation-content.component.html',
  styleUrl: './navigation-content.component.css'
})
export class NavigationContentComponent {
  constructor() { }

  swiper = new Swiper('.swiper', {
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
        slidesPerView: 4.3,
      }
    }
  });

}
