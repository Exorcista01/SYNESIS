import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Task, TaskService } from '../../../../core/services/task/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  @Input() tasks: Task[] = [];
  @Input() activeTask: Task | undefined;
  @Output() taskSelected = new EventEmitter<Task>();
  @Output() taskToggled = new EventEmitter<Task>();
  @Output() addTaskClicked = new EventEmitter<void>();
  
  constructor() {}

  toggleStatus(event: MouseEvent, task: Task): void {
    event.stopPropagation(); 
    this.taskToggled.emit(task);
  }

  selectTask(task: Task): void {
    this.taskSelected.emit(task);
  }

  openAddTaskModal(): void {
    this.addTaskClicked.emit();
  }

}
