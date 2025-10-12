import { CommonModule} from '@angular/common';
import { Component, Output, EventEmitter, SimpleChanges, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-pomo',
  imports: [CommonModule, FormsModule],
  templateUrl: './custom-pomo.component.html',
  styleUrl: './custom-pomo.component.css'
})
export class CustomPomoComponent {
  focusTime: number = 25;
  shortTime: number = 5;
  longTime: number = 15;

  @Input() initialFocus: number = 25;
  @Input() initialShort: number = 5;
  @Input() initialLong: number = 15;

  @Output() settingsUpdated = new EventEmitter<{ focus: number, short: number, long: number }>();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['initialFocus']) {
      this.focusTime = this.initialFocus;
    }
    if (changes['initialShort']) {
      this.shortTime = this.initialShort;
    }
    if (changes['initialLong']) {
      this.longTime = this.initialLong;
    }
  }

  onUpdate(): void {
    const newSettings = {
      focus: this.focusTime,
      short: this.shortTime,
      long: this.longTime
    };
    this.settingsUpdated.emit(newSettings);
    alert('Configurações atualizadas!');
  }
  
  onReset(): void {
    this.focusTime = this.initialFocus;
    this.shortTime = this.initialShort;
    this.longTime = this.initialLong;
    this.onUpdate(); 
  }
}
