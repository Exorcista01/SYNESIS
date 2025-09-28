import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Course } from '../../../../../../core/services/cursos/cursos.service';

@Component({
  selector: 'app-vision-all',
  imports: [NgClass, ],
  templateUrl: './vision-all.component.html',
  styleUrl: './vision-all.component.css'
})
export class VisionAllComponent {
  @Input() course: Course | undefined;
  
  isCollapsed = true;

  // Função para alternar o valor de isCollapsed
  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

   expandedModules: { [key: number]: boolean } = {};

  // 2. Função para alternar o estado de um módulo específico
  toggleModule(moduleOrder: number): void {
    this.expandedModules[moduleOrder] = !this.expandedModules[moduleOrder];
  }
  
  // 3. Função auxiliar para verificar no HTML se um módulo está aberto
  isModuleExpanded(moduleOrder: number): boolean {
    return this.expandedModules[moduleOrder] || false;
  }
}
