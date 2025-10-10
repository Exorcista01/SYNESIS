import { Exercicio, Quiz, Pergunta } from './../exercicio.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { ExercicioService } from '../exercicio.service';
import { CommonModule, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-exercicio-detalhe',
  imports: [CommonModule],
  templateUrl: './exercicio-detalhe.component.html',
  styleUrl: './exercicio-detalhe.component.css'
})
export class ExercicioDetalheComponent {
  exercicio$: Observable<Exercicio> | undefined;
  quiz$: Observable<Quiz[]> | undefined;
  perguntas: Pergunta[] = [];
  currentQuestionIndex: number = 0;
  userAnswers = new Map<string, string>();
  eliminatedAnswers = new Map<string, string[]>();

  isQuizSubmitted: boolean = false;
  score: number = 0;
  constructor(
    private route: ActivatedRoute,
    private exercicioService: ExercicioService
  ) {}

  ngOnInit(): void {
    const exercicioId = this.route.snapshot.paramMap.get('id');

    if (exercicioId) {
      this.exercicio$ = this.exercicioService.getExercicioById(exercicioId);
      
      // Usamos o operador 'tap' para "espiar" os dados quando eles chegam
      // e guardá-los em nossas variáveis locais sem interromper o fluxo.
      this.quiz$ = this.exercicioService.getQuizByExercicioId(exercicioId).pipe(
        tap(quizData => {
          if (quizData && quizData.length > 0) {
            this.perguntas = quizData[0].perguntas;
          }
        })
      );
    }
  }

   nextQuestion(): void {
    if (this.currentQuestionIndex < this.perguntas.length - 1) {
      this.currentQuestionIndex++;
    }
  }

  previousQuestion(): void {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
    }
  }

  selectAnswer(questionId: string, answer: string): void {
    this.userAnswers.set(questionId, answer);
  }

  toggleEliminate(questionId: string, optionToToggle: string): void {
    const eliminated = this.eliminatedAnswers.get(questionId) || [];
    const index = eliminated.indexOf(optionToToggle);
    

    if (index > -1) {
      eliminated.splice(index, 1); 
    } else {
      eliminated.push(optionToToggle); 
    }
    this.eliminatedAnswers.set(questionId, eliminated);
  }

  isEliminated(questionId: string, option: string): boolean {
    return this.eliminatedAnswers.get(questionId)?.includes(option) ?? false;
  }

  submitQuiz(): void {
    this.score = 0;
    this.perguntas.forEach(pergunta => {
      const userAnswer = this.userAnswers.get(pergunta.id);
      if (userAnswer === pergunta.respostaCorreta) {
        this.score++;
      }
    });
    this.isQuizSubmitted = true;
  }

  getOptionState(pergunta: Pergunta, option: string): string {
    if (!this.isQuizSubmitted) {
      return 'default';
    }

    const correctAnswer = pergunta.respostaCorreta;
    const userAnswer = this.userAnswers.get(pergunta.id);

    if (option === correctAnswer) {
      return 'correct'; 
    }

    if (option === userAnswer) {
      return 'incorrect'; 
    }

    return 'default';
  }
}
