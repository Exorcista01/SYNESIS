import { Component, Output, EventEmitter  } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-categoria',
  imports: [FormsModule],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css'
})
export class CategoriaComponent {
    @Output() filtersChanged = new EventEmitter <any>();
    onFilterChange(): void {
    } 

    searchValue: string  = "";

    searchClear(): void{
      this.searchValue = "";
    };


   accordionsContent = [
   { 
      title: 'Categorias',
      key: 'catalogo',
      isOpen: false,
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
      key: 'nivel',
      isOpen: false,
      chields: [
        {label: 'Iniciante' , checked: false},
        {label: 'Intermediario' , checked: false},
        {label: 'Avançado' , checked: false}
      ]
    },
    {
      title: "Professores",
      key: 'professor',
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
}
