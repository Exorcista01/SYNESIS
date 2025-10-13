import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Course } from '../../course.model';
import { CursosService } from '../../../../core/services/cursos/cursos.service';

@Component({
  selector: 'app-pages-catalogo',
  imports: [RouterModule],
  templateUrl: './pages-catalogo.component.html',
  styleUrl: './pages-catalogo.component.css'
})
export class PagesCatalogoComponent {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) { }

  ngOnInit(): void {
    const courseSlug = this.route.snapshot.paramMap.get('slug');

    if (courseSlug) {
      this.course = this.cursosService.getCourseById(courseSlug);
    }
  }
}
