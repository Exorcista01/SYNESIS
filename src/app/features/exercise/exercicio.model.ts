
export interface Pergunta {
  id: string;
  texto: string;
  opcoes: string[];
  respostaCorreta: string;
}

export interface Quiz {
  id: string;
  exercicioId: string;
  perguntas: Pergunta[];
}

export interface Exercicio {
  id: string;
  catalogo: string;
  type: string;
  professor: string;
  title: string;
  instructorAvatar: string;
  description: string;
}