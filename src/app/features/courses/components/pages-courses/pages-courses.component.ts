import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Course, CursosService } from '../../../../core/services/cursos/cursos.service';
import { IntroducionComponent } from "./introducion/introducion.component";

@Component({
  selector: 'app-pages-courses',
  imports: [IntroducionComponent],
  templateUrl: './pages-courses.component.html',
  styleUrl: './pages-courses.component.css'
})
export class PagesCoursesComponent  implements OnInit{
   course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) { }

   ngOnInit(): void {
    const courseSlug = this.route.snapshot.paramMap.get('slug');

    // 2. Verificamos se o ID realmente existe na URL 
    if (courseSlug) {
      // 3. Usamos o ID para pedir ao serviço que encontre o curso
      this.course = this.cursosService.getCourseById(courseSlug);
    }
  }
}
