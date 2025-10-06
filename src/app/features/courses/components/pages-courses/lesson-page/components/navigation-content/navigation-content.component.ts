import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, Input, Output, output, EventEmitter } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Course, Lesson } from '../../../../../course.model';


@Component({
  selector: 'app-navigation-content',
  imports: [CommonModule],
  templateUrl: './navigation-content.component.html',
  styleUrl: './navigation-content.component.css'
})
export class NavigationContentComponent {
  @Input() course: Course | undefined;
  @Input() ActiveLesson: Lesson | undefined;
  @Input() activeTab: string = "Visão-Geral";
  @Output() tabChange = new EventEmitter<string>();
  @Input() isSidebarClosed: boolean = false; 

  
  selectTab(tabName: string): void {
    this.tabChange.emit(tabName);
  }



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
