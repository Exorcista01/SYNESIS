import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FormStatsPipe } from '../../../../../../shared/form-stats.pipe';

@Component({
  selector: 'app-stats-card',
  imports: [CommonModule, FormStatsPipe],
  templateUrl: './stats-card.component.html',
  styleUrl: './stats-card.component.css'
})
export class StatsCardComponent {
  @Input() iconClass: string = 'fa-solid fa-question';
  @Input() iconColorClass: string = 'icon-default';
  @Input() value: string = '0';
  @Input() label: string = 'Label';
  @Input() graphPath: string = 'M 0 50 L 100 50'; 
  @Input() gradientId: string = 'defaultGradient';
  @Input() gradientColor: string = '#888';
  @Input() strokeColor: string = '#888';
}
