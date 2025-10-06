import { Injectable } from '@angular/core';
import { Course, CardSection, Module, Lesson, CourseLevel } from '../../../features/courses/course.model';


@Injectable({
  providedIn: 'root',
})
export class CursosService {
  cardSections: CardSection[] = [
  {
    title: 'Manutenção de Computadores',
    courses: [
      {
        id: 101,
        slug: 'montagem-e-manutencao-de-computadores',
        img: 'https://placehold.co/600x400/4D4D4D/FFF?text=PC',
        title: 'Montagem e Manutenção de Computadores',
        description: 'Aprenda a montar, instalar e realizar manutenções em PCs.',
        descriptionLong: 'Curso prático sobre escolha de componentes, montagem de computadores, instalação de sistemas e manutenção preventiva/corretiva.',
        author: 'Prof. Fábio Gomes',
        year: '2025',
        tags: ['Hardware', 'Manutenção'],
        level: 'Iniciante',
        modules: [
          {
            order: 1,
            title: 'Introdução e Ferramentas',
            durationInHours: 2,
            thumbnail: 'https://placehold.co/100x60/4D4D4D/FFF?text=Tools',
            learnings: ['Identificar ferramentas', 'Segurança elétrica'],
            skills: ['Montagem', 'Manutenção'],
            lessons: [
              { id: 1011, title: 'Boas Práticas de Segurança', type: 'video', description: 'Uso de EPI e cuidados elétricos.' },
              { id: 1012, title: 'Ferramentas Essenciais', type: 'artigo', description: 'Chaves, multímetro, pasta térmica.' },
            ],
          },
          {
            order: 2,
            title: 'Montagem do Computador',
            durationInHours: 5,
            thumbnail: 'https://placehold.co/100x60/4D4D4D/FFF?text=Build',
            learnings: ['Montar um PC do zero', 'Organizar cabos'],
            skills: ['Montagem de PC'],
            lessons: [
              { id: 1021, title: 'Instalando a Placa-mãe', type: 'video', description: 'Como fixar e conectar corretamente.' },
              { id: 1022, title: 'Memória RAM e CPU', type: 'video', description: 'Instalação correta e dissipação térmica.' },
              { id: 1023, title: 'Placa de Vídeo e Periféricos', type: 'artigo', description: 'GPU, SSDs e cabos SATA.' },
            ],
          },
        ],
      },
      {
        id: 102,
        slug: 'formatacao-e-instalacao-de-sistemas',
        img: 'https://placehold.co/600x400/007ACC/FFF?text=OS',
        title: 'Formatação e Instalação de Sistemas',
        description: 'Aprenda a formatar PCs e instalar sistemas operacionais.',
        descriptionLong: 'Domine particionamento de HDs, instalação de Windows/Linux e drivers.',
        author: 'Prof. Carla Menezes',
        year: '2025',
        tags: ['Sistemas Operacionais', 'Windows', 'Linux'],
        level: 'Iniciante',
        modules: [
          {
            order: 1,
            title: 'Preparação',
            durationInHours: 2,
            thumbnail: 'https://placehold.co/100x60/007ACC/FFF?text=ISO',
            learnings: ['Criar pendrive bootável', 'Configurar BIOS'],
            skills: ['Boot', 'BIOS'],
            lessons: [
              { id: 1031, title: 'Configuração da BIOS/UEFI', type: 'video', description: 'Definindo ordem de boot.' },
              { id: 1032, title: 'Criando Mídia de Instalação', type: 'artigo', description: 'Pendrive bootável com Rufus.' },
            ],
          },
          {
            order: 2,
            title: 'Instalação de Sistemas',
            durationInHours: 4,
            thumbnail: 'https://placehold.co/100x60/007ACC/FFF?text=Install',
            learnings: ['Instalar Windows', 'Instalar Linux'],
            skills: ['Windows', 'Linux'],
            lessons: [
              { id: 1041, title: 'Instalação do Windows 11', type: 'video', description: 'Passo a passo atualizado.' },
              { id: 1042, title: 'Instalação do Ubuntu', type: 'video', description: 'Linux para iniciantes.' },
              { id: 1043, title: 'Drivers e Programas Essenciais', type: 'artigo', description: 'O que instalar após o SO.' },
            ],
          },
        ],
      },
      {
        id: 103,
        slug: 'diagnostico-de-problemas-em-pcs',
        img: 'https://placehold.co/600x400/FF5722/FFF?text=Diag',
        title: 'Diagnóstico de Problemas em PCs',
        description: 'Aprenda a identificar e corrigir falhas comuns em computadores.',
        descriptionLong: 'Curso prático de diagnóstico de hardware e software em PCs de mesa e notebooks.',
        author: 'Prof. João Nascimento',
        year: '2025',
        tags: ['Diagnóstico', 'Hardware', 'Software'],
        level: 'Intermediário',
        modules: [
          {
            order: 1,
            title: 'Problemas de Hardware',
            durationInHours: 3,
            thumbnail: 'https://placehold.co/100x60/FF5722/FFF?text=HW',
            learnings: ['Identificação de falhas físicas', 'Testes com ferramentas'],
            skills: ['Hardware'],
            lessons: [
              { id: 1051, title: 'Falhas de Memória RAM', type: 'video', description: 'Sintomas e testes com MemTest.' },
              { id: 1052, title: 'Superaquecimento e Cooler', type: 'artigo', description: 'Como detectar e resolver superaquecimento.' },
            ],
          },
          {
            order: 2,
            title: 'Problemas de Software',
            durationInHours: 2,
            thumbnail: 'https://placehold.co/100x60/FF5722/FFF?text=SW',
            learnings: ['Tela azul', 'Travamentos'],
            skills: ['Sistemas Operacionais'],
            lessons: [
              { id: 1061, title: 'Tela Azul no Windows', type: 'video', description: 'Causas e correções comuns.' },
              { id: 1062, title: 'Travamentos no Linux', type: 'artigo', description: 'Diagnóstico no Ubuntu e Debian.' },
              { id: 1063, title: 'Ferramentas de Log', type: 'artigo', description: 'Event Viewer e dmesg.' },
            ],
          },
        ],
      },
      {
        id: 104,
        slug: 'manutencao-de-notebooks',
        img: 'https://placehold.co/600x400/795548/FFF?text=Notebook',
        title: 'Manutenção de Notebooks',
        description: 'Aprenda a realizar manutenção preventiva e corretiva em notebooks.',
        descriptionLong: 'Curso voltado para desmontagem, limpeza, troca de peças e upgrade em notebooks.',
        author: 'Prof. Daniela Ferreira',
        year: '2025',
        tags: ['Notebooks', 'Manutenção'],
        level: 'Avançado',
        modules: [
          {
            order: 1,
            title: 'Desmontagem e Limpeza',
            durationInHours: 4,
            thumbnail: 'https://placehold.co/100x60/795548/FFF?text=Clean',
            learnings: ['Desmontagem segura', 'Limpeza de teclado e cooler'],
            skills: ['Notebooks'],
            lessons: [
              { id: 1071, title: 'Abrindo o Notebook', type: 'video', description: 'Passo a passo sem danificar carcaça.' },
              { id: 1072, title: 'Limpeza de Cooler e Teclado', type: 'artigo', description: 'Remoção de poeira e substituição de pasta térmica.' },
            ],
          },
          {
            order: 2,
            title: 'Troca e Upgrade',
            durationInHours: 3,
            thumbnail: 'https://placehold.co/100x60/795548/FFF?text=Upgrade',
            learnings: ['Troca de HD por SSD', 'Expansão de memória RAM'],
            skills: ['Upgrade de notebooks'],
            lessons: [
              { id: 1081, title: 'Substituição de HD por SSD', type: 'video', description: 'Melhorando performance do notebook.' },
              { id: 1082, title: 'Expansão de Memória RAM', type: 'artigo', description: 'Identificando compatibilidade e instalando memória.' },
            ],
          },
        ],
      },
      {
        id: 105,
        slug: 'eletronica-basica-para-manutencao',
        img: 'https://placehold.co/600x400/8BC34A/FFF?text=Eletronica',
        title: 'Eletrônica Básica para Manutenção de Computadores',
        description: 'Fundamentos de eletrônica voltados para manutenção em TI.',
        descriptionLong: 'Conceitos básicos de eletricidade e eletrônica aplicados à manutenção de computadores e periféricos.',
        author: 'Prof. Gustavo Araújo',
        year: '2025',
        tags: ['Eletrônica', 'Hardware'],
        level: 'Intermediário',
        modules: [
          {
            order: 1,
            title: 'Conceitos Básicos',
            durationInHours: 3,
            thumbnail: 'https://placehold.co/100x60/8BC34A/FFF?text=Eletric',
            learnings: ['Corrente e tensão', 'Uso do multímetro'],
            skills: ['Eletrônica básica'],
            lessons: [
              { id: 1091, title: 'Tensão, Corrente e Resistência', type: 'artigo', description: 'Leis de Ohm e potência.' },
              { id: 1092, title: 'Usando o Multímetro', type: 'video', description: 'Como medir corretamente tensão e resistência.' },
            ],
          },
          {
            order: 2,
            title: 'Componentes em PCs',
            durationInHours: 2,
            thumbnail: 'https://placehold.co/100x60/8BC34A/FFF?text=PCB',
            learnings: ['Capacitores', 'MOSFETs'],
            skills: ['Reparo eletrônico'],
            lessons: [
              { id: 1101, title: 'Identificação de Componentes', type: 'artigo', description: 'Capacitores, resistores, transistores.' },
              { id: 1102, title: 'Teste de Capacitores', type: 'video', description: 'Como testar e substituir capacitores em placas-mãe.' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Redes de Computadores',
    courses: [
      {
        id: 201,
        slug: 'origem-e-fundamentos-de-redes',
        img: 'https://placehold.co/600x400/009688/FFF?text=NET',
        title: 'Origem e Fundamentos de Redes',
        description: 'Conceitos básicos e evolução das redes.',
        descriptionLong: 'Entenda a história, o modelo OSI, TCP/IP e endereçamento IP.',
        author: 'Prof. Patrícia Lima',
        year: '2025',
        tags: ['Redes', 'Infraestrutura'],
        level: 'Iniciante',
        modules: [
          {
            order: 1,
            title: 'História e Conceitos Básicos',
            durationInHours: 3,
            thumbnail: 'https://placehold.co/100x60/009688/FFF?text=History',
            learnings: ['Evolução da internet', 'Modelo OSI'],
            skills: ['Conceitos de Redes'],
            lessons: [
              { id: 2011, title: 'História da Internet', type: 'video', description: 'Como surgiu a internet moderna.' },
              { id: 2012, title: 'Modelo OSI', type: 'artigo', description: 'As 7 camadas e sua importância.' },
              { id: 2013, title: 'Endereçamento IP', type: 'video', description: 'IPv4, IPv6 e sub-redes.' },
            ],
          },
          {
            order: 2,
            title: 'Protocolos Essenciais',
            durationInHours: 4,
            thumbnail: 'https://placehold.co/100x60/009688/FFF?text=Proto',
            learnings: ['TCP/UDP', 'HTTP/HTTPS', 'DNS'],
            skills: ['Protocolos'],
            lessons: [
              { id: 2021, title: 'TCP e UDP', type: 'video', description: 'Diferenças e usos.' },
              { id: 2022, title: 'HTTP e HTTPS', type: 'artigo', description: 'Protocolos da web.' },
              { id: 2023, title: 'DHCP e DNS', type: 'video', description: 'Resolução de nomes e atribuição de IPs.' },
            ],
          },
        ],
      },
      {
        id: 202,
        slug: 'configuracao-de-redes-locais',
        img: 'https://placehold.co/600x400/673AB7/FFF?text=LAN',
        title: 'Configuração de Redes Locais (LAN)',
        description: 'Aprenda a configurar switches, roteadores e redes locais.',
        descriptionLong: 'Curso prático de LAN, cabeamento estruturado e Wi-Fi.',
        author: 'Prof. Vanessa Santos',
        year: '2025',
        tags: ['Redes', 'LAN'],
        level: 'Intermediário',
        modules: [
          {
            order: 1,
            title: 'Cabeamento Estruturado',
            durationInHours: 3,
            thumbnail: 'https://placehold.co/100x60/673AB7/FFF?text=RJ45',
            learnings: ['Tipos de cabos', 'Montagem de patch panel'],
            skills: ['Cabeamento'],
            lessons: [
              { id: 2031, title: 'Cabos de Rede', type: 'artigo', description: 'UTP, STP, CAT5e, CAT6.' },
              { id: 2032, title: 'Crimpagem RJ-45', type: 'video', description: 'Passo a passo prático.' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Fundamentos de Programação',
    courses: [
      {
        id: 301,
        slug: 'logica-de-programacao-para-iniciantes',
        img: 'https://placehold.co/600x400/3178C6/FFF?text=Logic',
        title: 'Lógica de Programação para Iniciantes',
        description: 'Aprenda lógica aplicada em TI.',
        descriptionLong: 'Variáveis, estruturas condicionais, algoritmos básicos.',
        author: 'Prof. Ana Beatriz Costa',
        year: '2025',
        tags: ['Lógica', 'Algoritmos'],
        level: 'Iniciante',
        modules: [
          {
            order: 1,
            title: 'Conceitos Básicos',
            durationInHours: 2,
            thumbnail: 'https://placehold.co/100x60/3178C6/FFF?text=Logic',
            learnings: ['Variáveis', 'Operadores'],
            skills: ['Pensamento lógico'],
            lessons: [
              { id: 3011, title: 'O que são Variáveis?', type: 'artigo', description: 'Entenda variáveis e tipos primitivos.' },
              { id: 3012, title: 'Operadores Lógicos e Matemáticos', type: 'video', description: 'Como funcionam operadores em programação.' },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Suporte em TI',
    courses: [
      {
        id: 401,
        slug: 'atendimento-e-suporte-tecnico',
        img: 'https://placehold.co/600x400/03A9F4/FFF?text=SUPORTE',
        title: 'Atendimento e Suporte Técnico',
        description: 'Técnicas de help desk e suporte ao usuário.',
        descriptionLong: 'Como atender chamados, resolver falhas e documentar suporte.',
        author: 'Prof. Ricardo Oliveira',
        year: '2025',
        tags: ['Suporte Técnico', 'TI'],
        level: 'Iniciante',
        modules: [
          {
            order: 1,
            title: 'Atendimento ao Usuário',
            durationInHours: 2,
            thumbnail: 'https://placehold.co/100x60/03A9F4/FFF?text=Help',
            learnings: ['Boas práticas de suporte', 'Comunicação clara'],
            skills: ['Suporte', 'Atendimento'],
            lessons: [
              { id: 4011, title: 'Abertura de Chamados', type: 'artigo', description: 'Como registrar corretamente um chamado.' },
              { id: 4012, title: 'Resolvendo Problemas Comuns', type: 'video', description: 'Erros de software e hardware simples.' },
            ],
          },
        ],
      },
    ],
  },
];


  constructor() {}

  getCardSections() {
    return this.cardSections;
  }

  getCourseById(slug: string): Course | undefined {
    for (const section of this.cardSections) {
      const foundCourse = section.courses.find(
        (course) => course.slug === slug
      );
      if (foundCourse) {
        return foundCourse;
      }
    }
    return undefined;
  }

  getTotalLessons(slug: string): number {
    const course = this.getCourseById(slug);
    if (!course || !course.modules) {
      return 0;
    }

    return course.modules.reduce((total, module) => {
      return total + (module.lessons ? module.lessons.length : 0);
    }, 0);
  }
}

