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
  
  
}
