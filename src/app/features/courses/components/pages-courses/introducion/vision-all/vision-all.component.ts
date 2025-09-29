import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Course } from '../../../../course.model';

@Component({
  selector: 'app-vision-all',
  imports: [NgClass, ],
  templateUrl: './vision-all.component.html',
  styleUrl: './vision-all.component.css'
})


export class VisionAllComponent {
  @Input() course: Course | undefined;
  
  isCollapsed = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

   expandedModules: { [key: number]: boolean } = {};

  toggleModule(moduleOrder: number): void {
    this.expandedModules[moduleOrder] = !this.expandedModules[moduleOrder];
  }
  
  isModuleExpanded(moduleOrder: number): boolean {
    return this.expandedModules[moduleOrder] || false;
  }
}
