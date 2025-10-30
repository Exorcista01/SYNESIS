import { CommonModule  } from '@angular/common';
import { Component,  Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Course } from '../../../course.model';
import { VisionAllComponent } from "./vision-all/vision-all.component";

export interface BreadcrumbItem {
  label: string;
  url?: string; 
}

@Component({
  selector: 'app-introducion',
  imports: [RouterLink, CommonModule, VisionAllComponent],
  templateUrl: './introducion.component.html',
  styleUrl: './introducion.component.css'
})
export class IntroducionComponent implements OnChanges {
  activeTab: 'vision' | 'content' = 'vision';

  setActiveTab(tab: 'vision' | 'content'): void {
    this.activeTab = tab;
  }
   
 @Input() course: Course | undefined;

  breadcrumbItems: BreadcrumbItem[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['course'] && this.course) {
      this.buildBreadcrumb(this.course.title);
    }
  }

  private buildBreadcrumb(title: string): void {
    this.breadcrumbItems = [
      { label: 'Cursos', url: '/courses' },
      { label: 'Todos os Cursos', url: '/courses' }, 
      { label: title } 
    ];
  }
}
