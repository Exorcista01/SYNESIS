import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter  } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-categoria',
  imports: [FormsModule, CommonModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
    @Output() filtersChanged = new EventEmitter <any>();
    isFilterModalOpen = false;
    searchValue: string  = "";

    searchClear(): void{
      this.searchValue = "";
    };


   accordionsContent = [
   { 
      title: 'Categorias',
      key: 'category',
      isOpen: open,
      chields: [
        {label: 'Manutenção de Computadores', checked: false},
        {label: 'Tecnologia da Informação' , checked: false},
        {label: 'Redes de Computadores' , checked: false},
        {label: 'Lógica de Programação' , checked: false},
        {label: 'Matematica' , checked: false},
        {label: 'Java Script' , checked: false},
        {label: 'Html' , checked: false},
        {label: 'Css' , checked: false}
      ]
    },
    {
      title: 'Niveis',
      key: 'level',
      isOpen: false,
      chields: [
        {label: 'Iniciante' , checked: false},
        {label: 'Intermediario' , checked: false},
        {label: 'Avançado' , checked: false}
      ]
    },
    {
      title: "Professores",
      key: 'author',
      isOpen: false,
      chields: [
        {label: 'Ivan' , checked: false},
        {label: 'Carlos' , checked: false},
        {label: 'Monica' , checked: false},
        {label: 'Alisson' , checked: false},
        {label: 'Natan' , checked: false},
        {label: 'Uelissu' , checked: false},
        {label: 'Jorge' , checked: false},
      ]
    }
  ]


  isOpenAccordion: boolean = false;

  isOpen(): void {
    this.isOpenAccordion = !this.isOpenAccordion;
    console.log("mudei")
  }

  onFilterChange(): void {
    const activeFilters: any = {};

    this.accordionsContent.forEach(accordion => {
      const selectedChildren = accordion.chields
        .filter(child => child.checked)
        .map(child => child.label);
      
      if (selectedChildren.length > 0) {
        activeFilters[accordion.key] = selectedChildren;
      }
    });

    this.filtersChanged.emit(activeFilters);
  }

  clearFilters(): void {
    this.accordionsContent.forEach(group => group.chields.forEach(child => child.checked = false));
    this.onFilterChange();
  }

  toggleFilterModal(): void {
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }

  closeFilterModal(): void {
    this.isFilterModalOpen = false;
  }
  
  applyFiltersAndClose(): void {
    this.closeFilterModal();
  }
}
