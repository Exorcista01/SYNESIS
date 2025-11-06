import { Component } from '@angular/core';
import { CategoriaComponent } from "../../../shared/components/categoria/categoria.component";
import { BannerExerciseComponent } from "./banner-exercise/banner-exercise.component";
import { AllExerciseComponent } from "./all-exercise/all-exercise.component";

@Component({
  selector: 'app-list-exercise',
  imports: [CategoriaComponent, BannerExerciseComponent, AllExerciseComponent],
  templateUrl: './list-exercise.component.html',
  styleUrl: './list-exercise.component.css'
})
export class ListExerciseComponent {
  isFilterModalOpen = false; 

  toggleFilterModal(): void {
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }

  closeFilterModal(): void {
    this.isFilterModalOpen = false;
  }

  applyFiltersAndClose(): void {
    this.closeFilterModal();
  }

  onFilterChange(): void {
    console.log("Filtro mudou (recebido do app-categoria)");
  }

  clearFilters(): void {
    console.log("Limpar filtros (recebido do app-categoria)");

    if (!this.isFilterModalOpen) { 
       this.onFilterChange();
    }
  }
}
