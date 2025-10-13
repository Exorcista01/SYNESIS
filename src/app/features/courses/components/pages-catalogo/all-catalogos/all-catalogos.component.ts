import { Component, OnInit,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerCatalogosComponent } from "./banner-catalogos/banner-catalogos.component";
import { CategoriaComponent } from "../../../../../shared/components/categoria/categoria.component";
import { AllCardsCatalogoComponent } from "./all-cards-catalogo/all-cards-catalogo.component";
import { Course } from '../../../course.model';
import { CursosService } from '../../../../../core/services/cursos/cursos.service';

@Component({
  selector: 'app-all-catalogos',
  imports: [CommonModule, BannerCatalogosComponent, CategoriaComponent, AllCardsCatalogoComponent],
  templateUrl: './all-catalogos.component.html',
  styleUrl: './all-catalogos.component.css'
})
export class AllCatalogosComponent implements OnInit {

  masterCourseList: Course[] = []; 
  filteredCourses: Course[] = [];  

  constructor(private courseService: CursosService) {}

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe(courses => {
      this.masterCourseList = courses;
      this.filteredCourses = courses; 
    });
  }

applyFilters(filters: any): void {
  let tempCourses = [...this.masterCourseList];

  if (filters.category && filters.category.length > 0) {
    tempCourses = tempCourses.filter(course => filters.category.includes(course.category));
  }
  
  if (filters.nivel && filters.nivel.length > 0) { // O filtro envia 'nivel'
    tempCourses = tempCourses.filter(course => filters.nivel.includes(course.level)); // O curso tem a propriedade 'level'
  }

  if (filters.professor && filters.professor.length > 0) { // O filtro envia 'professor'
    tempCourses = tempCourses.filter(course => filters.professor.includes(course.author)); // O curso tem a propriedade 'author'
  }

  this.filteredCourses = tempCourses;
}
}
