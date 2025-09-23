import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CoursesCardsComponent } from './courses-cards/courses-cards.component';

@Component({
  selector: 'app-courses-section',
  imports: [MatTabsModule, CoursesCardsComponent],
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css'
})
export class CoursesSectionComponent {
  inProgressCourses = [
    {
      imageUrl: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Redes de Computadores: Essencial',
      category: 'Redes',
      description: 'Aprenda sobre protocolos, topologias e segurança de redes.',
      progress: 60,
      instructorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      instructorName: 'Ricardo Alves'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/4316/technology-computer-chips-gigabyte.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Manutenção de Hardware e Software',
      category: 'Hardware',
      description: 'Diagnostique e resolva problemas em computadores e sistemas.',
      progress: 45,
      instructorAvatar: 'https://randomuser.me/api/portraits/women/33.jpg',
      instructorName: 'Patrícia Moura'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Lógica de Programação e Algoritmos',
      category: 'Programação',
      description: 'Construa a base para aprender qualquer linguagem.',
      progress: 80,
      instructorAvatar: 'https://randomuser.me/api/portraits/men/34.jpg',
      instructorName: 'Felipe Barros'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Fundamentos de Cibersegurança',
      category: 'Segurança',
      description: 'Proteja sistemas e dados contra as principais ameaças digitais.',
      progress: 30,
      instructorAvatar: 'https://randomuser.me/api/portraits/women/35.jpg',
      instructorName: 'Leticia Gomes'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png',
      title: 'JavaScript: Interatividade para a Web',
      category: 'Desenvolvimento',
      description: 'Domine a linguagem essencial para o desenvolvimento front-end.',
      progress: 90,
      instructorAvatar: 'https://randomuser.me/api/portraits/men/36.jpg',
      instructorName: 'Bruno Martins'
    }
  ];
  
  notStartedCourses = [
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1280px-PHP-logo.svg.png',
      title: 'PHP Essencial para Iniciantes',
      category: 'Back-end',
      description: 'Aprenda a base do PHP para construir sites dinâmicos.',
      progress: 0,
      instructorAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
      instructorName: 'Carlos Pereira'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Fundamentos de Redes de Computadores',
      category: 'Infraestrutura',
      description: 'Entenda os conceitos essenciais de redes e protocolos.',
      progress: 0,
      instructorAvatar: 'https://randomuser.me/api/portraits/women/52.jpg',
      instructorName: 'Juliana Costa'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1200px-Figma-logo.svg.png',
      title: 'Design de Interfaces com Figma',
      category: 'UI/UX Design',
      description: 'Crie protótipos interativos e designs modernos.',
      progress: 0,
      instructorAvatar: 'https://randomuser.me/api/portraits/women/48.jpg',
      instructorName: 'Beatriz Lima'
    },
  ];

  completedCourses = [
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
      title: 'React.js: Crie Interfaces Reativas',
      category: 'Desenvolvimento',
      description: 'Construa SPAs poderosas com a biblioteca do Facebook.',
      progress: 100,
      instructorAvatar: 'https://randomuser.me/api/portraits/men/60.jpg',
      instructorName: 'Lucas Martins'
    },
    {
      imageUrl: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Gestão de Projetos com Scrum',
      category: 'Metodologia Ágil',
      description: 'Aprenda a gerenciar projetos de forma ágil e eficiente.',
      progress: 100,
      instructorAvatar: 'https://randomuser.me/api/portraits/women/61.jpg',
      instructorName: 'Fernanda Alves'
    },
  ];
  
  
}
