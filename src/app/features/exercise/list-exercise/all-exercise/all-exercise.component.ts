import { Component, Renderer2, Inject } from '@angular/core';
import { PaginationComponent } from "../../../../shared/components/pagination/pagination.component";
import { CommonModule, DOCUMENT } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExercicioService } from '../../exercicio.service';
import { Pergunta } from '../../exercicio.model';

@Component({
  selector: 'app-all-exercise',
  imports: [PaginationComponent, CommonModule, RouterModule],
  templateUrl: './all-exercise.component.html',
  styleUrl: './all-exercise.component.css',
})
export class AllExerciseComponent {

  allExercices: any[] = [];
  displayedExercices: any[] = [];
  totalItems = 0;
  itemsPerPage = 12; 
  currentPage = 1;
  openModal: boolean = false;
  selectedExercise: any | null = null;

  constructor(
    private exercicioService: ExercicioService,
    private renderer: Renderer2,               
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.exercicioService.getTodosExercicios().subscribe(data => {
      this.allExercices = data;
      this.totalItems = this.allExercices.length;
      this.updateDisplayedExercices();
    });
  }

  openModalButton(exercise: any): void {
    this.selectedExercise = exercise; 
    this.openModal = true;
    this.renderer.addClass(this.document.body, 'modal-open'); 
  }

  closeModalButton(): void {
    this.openModal = false;
    this.selectedExercise = null;
    this.renderer.removeClass(this.document.body, 'modal-open'); 
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.updateDisplayedExercices();
  }

  private updateDisplayedExercices(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedExercices = this.allExercices.slice(startIndex, endIndex);
  }


}
