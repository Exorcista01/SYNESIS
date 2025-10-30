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
  isFilterModalOpen = false; // <-- Nova propriedade

  // --- Funções Novas para o Modal ---
  toggleFilterModal(): void {
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }

  closeFilterModal(): void {
    this.isFilterModalOpen = false;
  }

  applyFiltersAndClose(): void {
    // A lógica de aplicar o filtro já deve estar no onFilterChange
    // que é disparado pelo app-categoria. Aqui só fechamos.
    this.closeFilterModal();
  }

  // --- Funções que recebem eventos do app-categoria ---
  // (Adapte os nomes se o seu app-categoria emitir eventos diferentes)
  onFilterChange(): void {
    console.log("Filtro mudou (recebido do app-categoria)");
    // Você pode chamar a lógica de recarregar/filtrar os exercícios aqui
    // Ou talvez o app-categoria já faça isso através de um serviço?
  }

  clearFilters(): void {
    console.log("Limpar filtros (recebido do app-categoria)");
    // Chame a lógica de limpar no app-categoria (se ele tiver) e/ou
    // recarregue/filtre os exercícios aqui.
    if (!this.isFilterModalOpen) { // Se não estiver no modal, só aplica
       this.onFilterChange();
    }
  }
}
