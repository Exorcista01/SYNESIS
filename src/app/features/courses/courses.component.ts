import { Component, OnInit } from '@angular/core';
import { BannerVideoComponent } from "./components/banner-video/banner-video.component";
import { MiniCardsComponent } from "./components/mini-cards/mini-cards.component";
import { ChieldCardsComponent } from "./components/chield-cards/chield-cards.component";

import { CursosService } from '../../core/services/cursos/cursos.service';

@Component({
  selector: 'app-courses',
  imports: [BannerVideoComponent, MiniCardsComponent, ChieldCardsComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent  implements OnInit {
  
 cardSections: any[] = [];

 constructor(private cursesService: CursosService ) {}

  ngOnInit(): void {
    this.cursesService.getCardSections().subscribe(data => {
      this.cardSections = data;
    })
  }

}
