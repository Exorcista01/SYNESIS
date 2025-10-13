import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../../../course.model';
import { CursosService } from '../../../../../../core/services/cursos/cursos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-all-cards-catalogo',
  imports: [RouterModule],
  templateUrl: './all-cards-catalogo.component.html',
  styleUrl: './all-cards-catalogo.component.css'
})
export class AllCardsCatalogoComponent implements OnInit {
   @Input() courses: Course[] = [];
  
    allCourses: Course[] = [];
  
    constructor(private courseService: CursosService) {}
  
    ngOnInit(): void {
      this.courseService.getAllCourses().subscribe(courses => {
        this.allCourses = courses;
      });
    }
}
