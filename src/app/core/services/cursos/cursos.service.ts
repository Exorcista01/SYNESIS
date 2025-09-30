import { Injectable } from '@angular/core';
import { Course, CardSection, Module, Lesson, CourseLevel } from '../../../features/courses/course.model';


@Injectable({
  providedIn: 'root',
})
export class CursosService {
  cardSections: CardSection[] = [
    {
      title: 'Desenvolvimento Web Essencial',
      courses: [
        {
          id: 101,
          slug: 'typescript-tipagem-estatica-para-javascript',
          img: 'https://placehold.co/600x400/3178C6/FFF?text=TS',
          title: 'TypeScript: Tipagem Estática para JavaScript',
          description:
            'Adicione superpoderes ao seu JavaScript. Aprenda a usar tipagem estática para criar aplicações mais robustas, escaláveis e com menos bugs.',
          descriptionLong:
            'Adicione superpoderes ao seu JavaScript. Aprenda a usar tipagem estática para criar aplicações mais robustas, escaláveis e com menos bugs. Neste curso aprofundado, você mergulhará no ecossistema do TypeScript, entendendo não apenas o "como", mas também o "porquê" da tipagem estática. Abordaremos desde os tipos básicos, como string, number e boolean, até conceitos mais avançados como interfaces, generics, enums e utility types que permitirão a você modelar dados complexos com precisão e segurança. Além disso, exploraremos como o TypeScript se integra perfeitamente com frameworks modernos como Angular, React e Vue.js, melhorando a experiência de desenvolvimento (DX) com autocompletar inteligente, refatoração segura e detecção de erros ainda em tempo de desenvolvimento, muito antes do seu código chegar em produção. Prepare-se para elevar a qualidade do seu código e ganhar mais confiança ao construir aplicações de larga escala.',
          author: 'Ana Beatriz Costa',
          year: '2025',
          tags: ['Front-end', 'JavaScript', 'TypeScript', 'Programação'],
          level: 'Intermediário',
          modules: [
            {
              order: 1,
              title: 'Introdução ao TypeScript e Tipagem',
              durationInHours: 4,
              thumbnail: 'https://placehold.co/100x60/3178C6/FFF?text=TS',
              learnings: [
                'Instalar o TypeScript e escrever seu primeiro programa',
                'Descrever os conceitos básicos da linguagem e da tipagem',
                'Usar variáveis para armazenar, recuperar e calcular informações',
              ],
              skills: [
                'Programação',
                'TypeScript',
                'Ambiente de Desenvolvimento',
              ],
              lessons: [
                {
                  id: 1011,
                  title: 'O que é TypeScript e por que usar?',
                  type: 'video',
                },
                { id: 1012, title: 'Instalando o ambiente', type: 'video' },
                {
                  id: 1013,
                  title: 'Tipos Primitivos: string, number e boolean',
                  type: 'artigo',
                },
                {
                  id: 1014,
                  title: 'Desafio: Criando seu primeiro tipo',
                  type: 'video',
                },
              ],
            },
            {
              order: 2,
              title: 'Interfaces, Classes e Tipos Avançados',
              durationInHours: 6,
              thumbnail: 'https://placehold.co/100x60/3178C6/FFF?text=TS',
              learnings: [
                'Modelar dados complexos com interfaces e tipos customizados',
                'Aplicar conceitos de Programação Orientada a Objetos com classes',
                'Utilizar tipos avançados como Union, Intersection e Tuplas',
              ],
              skills: ['TypeScript', 'POO', 'Modelagem de Dados', 'Interfaces'],
              lessons: [
                 {
                  id: 1021,
                  title: 'Modelando dados com Interfaces',
                  type: 'video',
                },
                { id: 1022, title: 'POO com Classes e Herança', type: 'video' },
                {
                  id: 1023,
                  title: 'Tipos Union e Intersection',
                  type: 'artigo',
                },
              ]
            },
            {
              order: 3,
              title: 'Generics e Decorators',
              durationInHours: 5,
              thumbnail: 'https://placehold.co/100x60/3178C6/FFF?text=TS',
              learnings: [
                'Criar componentes reutilizáveis e flexíveis com Generics',
                'Entender e aplicar Decorators para metaprogramação',
                'Adicionar funcionalidades a classes e métodos de forma declarativa',
              ],
              skills: [
                'Generics',
                'Decorators',
                'Metaprogramação',
                'TypeScript Avançado',
              ],
            },
            {
              order: 4,
              title: 'Configuração do Ambiente e Compilador',
              durationInHours: 3,
              thumbnail: 'https://placehold.co/100x60/3178C6/FFF?text=TS',
              learnings: [
                'Configurar o arquivo tsconfig.json para diferentes tipos de projetos',
                'Integrar o TypeScript com ferramentas de build como Webpack',
                'Compilar seu código para diferentes versões do JavaScript',
              ],
              skills: ['Compilação', 'tsconfig', 'Build Tools', 'Módulos'],
            },
          ],
          studyHours: 18,
          totalLessons: 12,
          totalMinutes: 1080,
          studentCount: 2274,
          accessEndDate: '29/09/2026',
          activities: '4 exercícios ',
        },
        {
          id: 102,
          slug: 'html5-e-css3-a-base-da-web-moderna',
          img: 'https://placehold.co/600x400/E34F26/FFF?text=HTML5',
          title: 'HTML5 e CSS3: A Base da Web Moderna',
          description: 'Domine as tecnologias fundamentais da web. Crie estruturas semânticas com HTML5 e layouts modernos e responsivos com CSS3.',
          descriptionLong: 'Domine as tecnologias fundamentais da web. Crie estruturas semânticas com HTML5 e layouts modernos e responsivos com CSS3. Este curso explora desde seletores avançados e Flexbox até Grid Layout e animações, preparando você para construir qualquer interface web.',
          author: 'Lucas Martins',
          year: '2024',
          tags: ['Front-end', 'HTML', 'CSS', 'Programação', 'Web Design'],
          level: 'Iniciante'
        },
        {
          id: 103,
          slug: 'react-construindo-interfaces-reativas',
          img: 'https://placehold.co/600x400/61DAFB/000?text=React',
          title: 'React: Construindo Interfaces Reativas',
          description: 'Construa interfaces de usuário dinâmicas e componentizadas com a biblioteca mais popular do mercado, o React.',
          descriptionLong: 'Construa interfaces de usuário dinâmicas e componentizadas com a biblioteca mais popular do mercado, o React. Explore o conceito de componentização, estado, props e crie SPAs (Single Page Applications) de alta performance do zero.',
          author: 'Camila Ribeiro',
          year: '2025',
          tags: ['Front-end', 'JavaScript', 'React', 'UI/UX', 'SPA'],
          level: 'Intermediário'
        },
      ],
    },
    {
      title: 'Infraestrutura e Hardware',
      courses: [
        {
          id: 201,
          slug: 'montagem-e-manutencao-de-computadores',
          img: 'https://placehold.co/600x400/4D4D4D/FFF?text=PC',
          title: 'Montagem e Manutenção de Computadores',
          description: 'Aprenda na prática a montar um computador do zero, escolher as melhores peças e diagnosticar problemas.',
          descriptionLong: 'Aprenda na prática a montar um computador do zero, escolher as melhores peças, diagnosticar problemas e realizar manutenções preventivas para garantir a longevidade e o bom desempenho do seu hardware.',
          author: 'Fábio Gomes',
          year: '2024',
          tags: ['Hardware', 'Manutenção', 'Suporte Técnico'],
          level: 'Iniciante',
        },
        {
          id: 202,
          slug: 'diagnostico-avancado-de-hardware',
          img: 'https://placehold.co/600x400/007ACC/FFF?text=Diag',
          title: 'Diagnóstico Avançado de Hardware',
          description: 'Vá além do básico e aprenda a utilizar ferramentas e técnicas avançadas para identificar e solucionar falhas complexas.',
          descriptionLong: 'Vá além do básico e aprenda a utilizar ferramentas e técnicas avançadas para identificar e solucionar falhas complexas de hardware em placas-mãe, memórias e outros componentes.',
          author: 'Sérgio Almeida',
          year: '2025',
          tags: ['Hardware', 'Manutenção', 'Diagnóstico', 'Suporte Técnico'],
          level: 'Avançado',
        },
      ],
    },
    {
      title: 'Redes de Computadores',
      courses: [
        {
          id: 301,
          slug: 'fundamentos-de-redes-e-protocolo-tcp-ip',
          img: 'https://placehold.co/600x400/009688/FFF?text=TCP/IP',
          title: 'Fundamentos de Redes e Protocolo TCP/IP',
          description: 'Entenda como a internet funciona. Explore os conceitos essenciais de redes, o modelo OSI e endereçamento IP.',
          descriptionLong: 'Entenda como a internet funciona. Explore os conceitos essenciais de redes, o modelo OSI, endereçamento IP e a pilha de protocolos TCP/IP, a base de toda a comunicação na web.',
          author: 'Patrícia Lima',
          year: '2024',
          tags: ['Redes', 'Infraestrutura', 'TCP/IP', 'Internet'],
          level: 'Iniciante',
        },
        {
          id: 302,
          slug: 'seguranca-de-redes-para-iniciantes',
          img: 'https://placehold.co/600x400/F44336/FFF?text=SEC',
          title: 'Segurança de Redes para Iniciantes',
          description: 'Proteja sistemas e dados aprendendo os princípios da segurança de redes, incluindo firewalls, VPNs e detecção de intrusos.',
          descriptionLong: 'Proteja sistemas e dados aprendendo os princípios da segurança de redes, incluindo firewalls, VPNs, detecção de intrusos e boas práticas de cibersegurança para se defender das ameaças mais comuns.',
          author: 'Gustavo Pereira',
          year: '2025',
          tags: ['Redes', 'Segurança', 'Infraestrutura', 'Cybersecurity'],
          level: 'Iniciante',
        },
        {
          id: 303,
          slug: 'configuracao-de-roteadores-e-switches',
          img: 'https://placehold.co/600x400/673AB7/FFF?text=Cisco',
          title: 'Configuração de Roteadores e Switches',
          description: 'Ganhe habilidades práticas na configuração de equipamentos de rede essenciais para criar redes locais (LANs) eficientes.',
          descriptionLong: 'Ganhe habilidades práticas na configuração de equipamentos de rede essenciais, como roteadores e switches, para criar redes locais (LANs) eficientes e seguras.',
          author: 'Vanessa Santos',
          year: '2024',
          tags: ['Redes', 'Infraestrutura', 'Cisco', 'Hardware de Rede'],
          level: 'Intermediário',
        },
      ],
    },
    {
      title: 'Ecossistema Java',
      courses: [
        {
          id: 401,
          slug: 'java-para-iniciantes-orientacao-a-objetos',
          img: 'https://placehold.co/600x400/f89820/FFF?text=Java',
          title: 'Java para Iniciantes: Orientação a Objetos',
          description: 'Comece sua jornada no mundo Java. Aprenda os fundamentos da programação orientada a objetos e principais APIs.',
          descriptionLong: 'Comece sua jornada no mundo Java. Aprenda os fundamentos da programação orientada a objetos, sintaxe básica, manipulação de coleções e principais APIs para construir suas primeiras aplicações.',
          author: 'Ricardo Oliveira',
          year: '2024',
          tags: ['Back-end', 'Java', 'Programação', 'POO'],
          level: 'Iniciante',
        },
        {
          id: 402,
          slug: 'spring-boot-apis-restful-eficientes',
          img: 'https://placehold.co/600x400/6DB33F/FFF?text=Spring',
          title: 'Spring Boot: APIs RESTful Eficientes',
          description: 'Aprenda a criar APIs RESTful robustas com Spring Boot, desde o básico até o deploy. Explore os conceitos de microsserviços.',
          descriptionLong: 'Aprenda a criar APIs RESTful robustas com Spring Boot, desde o básico até o deploy. Explore os conceitos de microsserviços e boas práticas de desenvolvimento para sistemas distribuídos.',
          author: 'Fernanda Kipper',
          year: '2025',
          tags: ['Back-end', 'Java', 'Spring', 'APIs', 'Microsserviços'],
          level: 'Avançado',
        },
      ],
    },
    {
      title: 'Mundo Python',
      courses: [
        {
          id: 501,
          slug: 'python-para-analise-de-dados-com-pandas',
          img: 'https://placehold.co/600x400/3776AB/FFF?text=Pandas',
          title: 'Python para Análise de Dados com Pandas',
          description: 'Utilize o poder do Python e da biblioteca Pandas para manipular, analisar e visualizar grandes conjuntos de dados.',
          descriptionLong: 'Utilize o poder do Python e da biblioteca Pandas para manipular, analisar e visualizar grandes conjuntos de dados de forma eficiente e extrair insights valiosos para a tomada de decisões.',
          author: 'Juliana Souza',
          year: '2025',
          tags: ['Data Science', 'Python', 'Pandas', 'Análise de Dados'],
          level: 'Intermediário',
        },
        {
          id: 502,
          slug: 'automacao-de-tarefas-com-python',
          img: 'https://placehold.co/600x400/FFD43B/000?text=Auto',
          title: 'Automação de Tarefas com Python',
          description: 'Deixe o computador trabalhar por você. Aprenda a escrever scripts em Python para automatizar tarefas repetitivas.',
          descriptionLong: 'Deixe o computador trabalhar por você. Aprenda a escrever scripts em Python para automatizar tarefas repetitivas, manipular arquivos e interagir com APIs.',
          author: 'Marcos Azevedo',
          year: '2024',
          tags: ['Automação', 'Python', 'Scripts', 'DevOps'],
          level: 'Iniciante',
        },
        {
          id: 503,
          slug: 'desenvolvimento-web-com-django',
          img: 'https://placehold.co/600x400/092E20/FFF?text=Django',
          title: 'Desenvolvimento Web com Django',
          description: 'Construa aplicações web completas e seguras com Django, o framework Python que incentiva o desenvolvimento rápido.',
          descriptionLong: 'Construa aplicações web completas e seguras com Django, o framework Python que incentiva o desenvolvimento rápido e um design limpo e pragmático.',
          author: 'Letícia Barros',
          year: '2025',
          tags: ['Back-end', 'Python', 'Django', 'Web Development'],
          level: 'Intermediário',
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

