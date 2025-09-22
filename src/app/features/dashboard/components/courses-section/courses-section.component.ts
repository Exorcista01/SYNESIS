import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { CoursesCardsComponent } from './courses-cards/courses-cards.component';
import { CalendaProgressComponent, ProgressDay } from '../calenda-progress/calenda-progress.component';


@Component({
  selector: 'app-courses-section',
  imports: [MatTabsModule, CoursesCardsComponent, CalendaProgressComponent],
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css'
})
export class CoursesSectionComponent {
  inProgressCourses = [
    {
        imageUrl: 'https://blog.codedimension.com.br/images/posts/o-que-%C3%A9-angular.jpg', title: 'Introdução Completa ao UI/UX', category: 'UI/UX Design', 
        description: 'Domine os fundamentos do design de interfaces.', progress: 75,
        instructorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg', instructorName: 'Ana Clara'
    },
    {
      imageUrl: 'https://blog.codedimension.com.br/images/posts/o-que-%C3%A9-angular.jpg', title: 'Angular: Do Básico ao Avançado', category: 'Desenvolvimento',
      description: 'Crie aplicações web robustas e escaláveis.', progress: 50,
      instructorAvatar: 'https://randomuser.me/api/portraits/men/46.jpg', instructorName: 'Jorge Silva'
    },
    {
        imageUrl: 'https://blog.codedimension.com.br/images/posts/o-que-%C3%A9-angular.jpg', title: 'Introdução Completa ao UI/UX', category: 'UI/UX Design', 
        description: 'Domine os fundamentos do design de interfaces.', progress: 75,
        instructorAvatar: 'https://randomuser.me/api/portraits/women/44.jpg', instructorName: 'Ana Clara'
    },
  ];
  notStartedCourses = [ /* ... */ ];
  completedCourses = [ /* ... */ ];
  
  // AQUI ESTÃO OS DADOS ADICIONAIS PARA O CALENDÁRIO
  userProgress: ProgressDay[] = [
    // Semana 1 de Setembro
    { date: '2025-09-01', level: 'high' },
    { date: '2025-09-02', level: 'medium' },
    { date: '2025-09-04', level: 'high' },
    { date: '2025-09-06', level: 'low' },
    
    // Semana 2 de Setembro
    { date: '2025-09-08', level: 'medium' },
    { date: '2025-09-09', level: 'medium' },
    { date: '2025-09-11', level: 'high' },
    
    // Semana 3 de Setembro
    { date: '2025-09-15', level: 'low' },
    { date: '2025-09-16', level: 'medium' },
    { date: '2025-09-18', level: 'high' },

    // Hoje (data atual para o exemplo)
    { date: '2025-09-21', level: 'medium' },
  ];
}
