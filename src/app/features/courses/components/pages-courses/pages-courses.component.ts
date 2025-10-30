import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CursosService } from '../../../../core/services/cursos/cursos.service';

import { IntroducionComponent } from "./introducion/introducion.component";
import { Course } from '../../course.model';

@Component({
  selector: 'app-pages-courses',
  imports: [IntroducionComponent],
  templateUrl: './pages-courses.component.html',
  styleUrl: './pages-courses.component.css'
})
export class PagesCoursesComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService, 
    private cdr: ChangeDetectorRef 
  ) { }

  ngOnInit(): void {
    const courseSlug = this.route.snapshot.paramMap.get('slug');

    if (courseSlug) {
      this.cursosService.getCourseById(courseSlug).subscribe(data => {
        this.course = data;
      })
    }
  }
}
