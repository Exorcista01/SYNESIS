import { Component } from '@angular/core';
import { Course } from '../../../course.model';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CursosService } from '../../../../../core/services/cursos/cursos.service';
import { BannerCatalogosComponent } from "../all-catalogos/banner-catalogos/banner-catalogos.component";

@Component({
  selector: 'app-one-catalogos',
  imports: [BannerCatalogosComponent, RouterModule],
  templateUrl: './one-catalogos.component.html',
  styleUrl: './one-catalogos.component.css'
})
export class OneCatalogosComponent {
  categoryTitle: string = '';
  filteredCourses: Course[] = [];

  constructor(
    private route: ActivatedRoute,
    private courseService: CursosService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categorySlug = params.get('category');
      
      if (categorySlug) {
        this.categoryTitle = categorySlug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

        this.courseService.getAllCourses().subscribe(allCourses => {
          this.filteredCourses = allCourses.filter(course => course.category === categorySlug);
        });
      }
    });
  }
}
