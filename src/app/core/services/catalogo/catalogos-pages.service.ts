import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Catalogos {
  slug: string;
  miniImg: string;
  miniTitle: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatalogosPagesService {

  constructor() { }

  private allPagesCatalogo: Catalogos[] = [
    {
      slug: 'logica',
      miniImg: 'assets/miniCards/logic.png',
      miniTitle: 'Lógica'
    },
    {
      slug: 'Manutenção de Computadores',
      miniImg: 'assets/miniCards/js.png',
      miniTitle: 'JavaScript'
    },
    {
      slug: 'Redes de Computadores',
      miniImg: 'assets/miniCards/php.png',
      miniTitle: 'PHP'
    },
    {
      slug: 'TI',
      miniImg: 'assets/miniCards/responsive-design.png',
      miniTitle: 'Design Responsivo'
    },
    {
      slug: 'Matematica',
      miniImg: 'assets/miniCards/dados.png',
      miniTitle: 'Banco de Dados'
    },
    {
      slug: 'Física',
      miniImg: 'assets/miniCards/conexao-de-rede.png',
      miniTitle: 'Redes'
    },
    {
      slug: 'Segurança de ti',
      miniImg: 'assets/miniCards/computador.png',
      miniTitle: 'Manutenção'
    },
    {
      slug: 'Biologia',
      miniImg: 'assets/miniCards/app-development.png',
      miniTitle: 'Desenvolvimento'
    },
    {
      slug: 'GDT',
      miniImg: 'assets/miniCards/computador.png',
      miniTitle: 'Manutenção'
    },
    {
      slug: 'IMC',
      miniImg: 'assets/miniCards/computador.png',
      miniTitle: 'Manutenção'
    },
    {
      slug: 'Portugues',
      miniImg: 'assets/miniCards/computador.png',
      miniTitle: 'Manutenção'
    },
    {
      slug: 'Ingles',
      miniImg: 'assets/miniCards/computador.png',
      miniTitle: 'Manutenção'
    },
    {
      slug: 'Mundo do trabalho',
      miniImg: 'assets/miniCards/computador.png',
      miniTitle: 'Manutenção'
    }
  ];

  getAllCourses(): Observable<Catalogos[]> {
    return of(this.allPagesCatalogo);
  }
}
