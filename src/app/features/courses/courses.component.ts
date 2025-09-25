import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.mudule';
import { CarroselComponent } from "../../shared/components/carrosel/carrosel.component";
import { BannerVideoComponent } from "./components/banner-video/banner-video.component";
import { MiniCardsComponent } from "./components/mini-cards/mini-cards.component";

@Component({
  selector: 'app-courses',
  imports: [SharedModule, BannerVideoComponent, MiniCardsComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  nomeUsuario: string = 'dasdas';
  subtituloBanner: string = 'O que você quer';
  palavraEmDestaque: string = 'Aprender';
  subtitulo: string = 'Explore, aprenda e evolua conosco.';
  textoDoBotao: string = 'Ver Cursos';
  imagemBanner: string = 'student.png';
  altDaImagem: string = 'Ilustração de um estudante';
}
