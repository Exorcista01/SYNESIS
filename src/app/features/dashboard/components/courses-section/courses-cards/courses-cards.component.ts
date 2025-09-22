import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-courses-cards',
  imports: [],
  templateUrl: './courses-cards.component.html',
  styleUrl: './courses-cards.component.css'
})
export class CoursesCardsComponent {
  @Input() course: any;
}
