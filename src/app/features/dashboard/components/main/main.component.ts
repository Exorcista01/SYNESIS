import { Component } from '@angular/core';
import { CalendaProgressComponent, ProgressDay } from "./calenda-progress/calenda-progress.component";
import { GridStatsComponent } from "./grid-stats/grid-stats.component";
import { CoursesSectionComponent } from "./courses-section/courses-section.component";
import { CarroselComponent } from "../../../../shared/components/carrosel/carrosel.component";
import { SharedModule } from '../../../../shared/shared.mudule';
import { RecentesComponent } from "./recentes/recentes.component";

@Component({
  selector: 'app-main',
  imports: [CalendaProgressComponent, GridStatsComponent, CoursesSectionComponent, CarroselComponent, SharedModule, RecentesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  userProgress: ProgressDay[] = [
    { date: '2025-09-01', status: 'completed' },
    { date: '2025-09-02', status: 'completed' },
    { date: '2025-09-04', status: 'completed' },
    { date: '2025-09-08', status: 'completed' },
    { date: '2025-09-10', status: 'completed' },
    { date: '2025-09-11', status: 'completed' },
    { date: '2025-09-15', status: 'completed' },
    { date: '2025-09-18', status: 'completed' },
  ];

  constructor() { }

  inProgressCourses = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Design de Interfaces com Figma',
        category: 'UI/UX Design',
        description: 'Aprenda a criar protótipos interativos e designs incríveis do zero.',
        progress: 85,
        instructorAvatar: 'https://randomuser.me/api/portraits/women/34.jpg',
        instructorName: 'Mariana Lima'
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'React.js: Construindo Aplicações Modernas',
      category: 'Desenvolvimento Front-end',
      description: 'Desenvolva SPAs (Single Page Applications) com a biblioteca mais popular do mercado.',
      progress: 60,
      instructorAvatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      instructorName: 'Carlos Souza'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Node.js, Express e MongoDB',
        category: 'Desenvolvimento Back-end',
        description: 'Construa APIs RESTful robustas e eficientes para suas aplicações web.',
        progress: 45,
        instructorAvatar: 'https://randomuser.me/api/portraits/men/86.jpg',
        instructorName: 'Ricardo Pereira'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Ciência de Dados com Python',
        category: 'Data Science',
        description: 'Análise, visualização e manipulação de dados com Pandas e Matplotlib.',
        progress: 70,
        instructorAvatar: 'https://randomuser.me/api/portraits/women/65.jpg',
        instructorName: 'Juliana Castro'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
        title: 'Marketing Digital para Iniciantes',
        category: 'Marketing',
        description: 'Descubra os canais e estratégias essenciais para alavancar seu negócio online.',
        progress: 90,
        instructorAvatar: 'https://randomuser.me/api/portraits/men/51.jpg',
        instructorName: 'Felipe Santos'
    },
];
  

}
