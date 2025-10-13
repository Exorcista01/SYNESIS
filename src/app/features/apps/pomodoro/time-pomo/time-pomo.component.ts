import {
  Component,
  Renderer2,
  ElementRef,
  OnInit,
  ChangeDetectorRef,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { Task } from '../../../../core/services/task/task.service';

@Component({
  selector: 'app-time-pomo',
  imports: [DecimalPipe, CommonModule],
  templateUrl: './time-pomo.component.html',
  styleUrl: './time-pomo.component.css',
})
export class TimePomoComponent implements OnInit, OnChanges {
  constructor() {}
  isRunning = false;
  seconds: number = 0;
  minutes: number = 25;
  timerId: any;
  totalSeconds: number = 0;
  activeMode: 'Focus' | 'Short Break' | 'Long Break' = 'Focus';
  @Input() focusDuration: number = 25;
  @Input() shortBreakDuration: number = 5;
  @Input() longBreakDuration: number = 15;
  @Input() activeTask: Task | undefined;
  @Output() pomodoroStarted = new EventEmitter<void>();
  @Output() pomodoroStopped = new EventEmitter<void>();
  @Output() skipTask = new EventEmitter<void>();

  skipToNextTask(): void {
    this.skipTask.emit();
  }


  progressStyle: string = '360deg';

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['focusDuration'] ||
      changes['shortBreakDuration'] ||
      changes['longBreakDuration']
    ) {
      if (!this.isRunning) {
        this.setMode(this.activeMode);
      }
    }
  }

  ngOnInit(): void {
    this.setMode('Focus');
  }

  startTime(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.pomodoroStarted.emit();
    console.log('Timer iniciado!');

    this.timerId = setInterval(() => {
      this.seconds--;
      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;
      }

      this.updateProgress();

      if (this.minutes == 0 && this.seconds == 0) {
        this.pauseTimer();
        this.pomodoroStopped.emit();
      }
    }, 1000);
  }

  pauseTimer(): void {
    clearInterval(this.timerId);
    this.isRunning = false;
    this.pomodoroStopped.emit();
  }

  resetTimer(): void {
    this.setMode(this.activeMode);
  }

  setMode(mode: 'Focus' | 'Short Break' | 'Long Break') {
    this.activeMode = mode;
    if (mode === 'Focus') {
      this.minutes = this.focusDuration;
    } else if (mode === 'Short Break') {
      this.minutes = this.shortBreakDuration;
    } else if (mode === 'Long Break') {
      this.minutes = this.longBreakDuration;
    }
    if (this.minutes == 0 && this.seconds == 0) {
      this.pauseTimer();
      localStorage.setItem('pomodoroRunning', 'false');
    }

    this.seconds = 0;
    this.pauseTimer();
    this.totalSeconds = this.minutes * 60;
    this.updateProgress();
  }

  updateProgress(): void {
    const progressPercentage =
      this.totalSeconds > 0
        ? (this.minutes * 60 + this.seconds) / this.totalSeconds
        : 1;
    const angle = progressPercentage * 360;

    this.progressStyle = `${angle}deg`;
  }
}
