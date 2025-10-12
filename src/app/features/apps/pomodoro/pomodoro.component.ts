import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DailyProgressComponent } from './daily-progress/daily-progress.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TimePomoComponent } from './time-pomo/time-pomo.component';
import { CustomPomoComponent } from './custom-pomo/custom-pomo.component';
import { Task, TaskService } from '../../../core/services/task/task.service';

@Component({
  selector: 'app-pomodoro',
  imports: [
    CommonModule,
    FormsModule,
    DailyProgressComponent,
    TaskListComponent,
    TimePomoComponent,
    CustomPomoComponent,
  ],
  templateUrl: './pomodoro.component.html',
  styleUrl: './pomodoro.component.css',
})
export class PomodoroComponent implements OnInit {
  focusDuration = 25;
  shortBreakDuration = 5;
  longBreakDuration = 15;

  tasks: Task[] = [];
  activeTask: Task | undefined;

  isModalOpen = false;
  newTaskName: string = '';
  newPomoCount: number = 1;

  get incompleteTasks(): Task[] {
    return this.tasks.filter((task) => !task.isCompleted);
  }

  get completedTaskCount(): number {
    return this.tasks.filter((task) => task.isCompleted).length;
  }

  get totalTaskCount(): number {
    return this.tasks.length;
  }

  get progressPercentage(): number {
    if (this.totalTaskCount === 0) {
      return 0;
    }
    return Math.round((this.completedTaskCount / this.totalTaskCount) * 100);
  }

  constructor(
    private taskService: TaskService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }


loadTasks(): void {
  this.taskService.getTasks().subscribe((tasksFromServer) => {
    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    this.tasks = tasksFromServer.map(task => {
      if (task.isCompleted && task.completionDate) {
        const completionDate = new Date(task.completionDate);
        
        if (completionDate < startOfToday) {
          return { ...task, isCompleted: false, pomosCompleted: 0, completionDate: null };
        }
      }
      return task;
    });

    this.activeTask = this.tasks.find((task) => !task.isCompleted);
  });
}

  applyNewSettings(newSettings: {
    focus: number;
    short: number;
    long: number;
  }): void {
    this.focusDuration = newSettings.focus;
    this.shortBreakDuration = newSettings.short;
    this.longBreakDuration = newSettings.long;
  }

  setActiveTask(task: Task): void {
    this.activeTask = task;
  }


  handleTaskToggled(taskToUpdate: Task): void {
    const isNowCompleted = !taskToUpdate.isCompleted;

    const updatedData = {
      ...taskToUpdate,
      isCompleted: isNowCompleted,
      completionDate: isNowCompleted ? new Date().toISOString() : null,
    };

    this.taskService.updateTask(updatedData).subscribe({
      next: (taskFromServer) => {
        this.tasks = this.tasks.map((task) =>
          task.id === taskFromServer.id ? taskFromServer : task
        );
        this.cd.detectChanges();
      },
      error: (err) => {
        console.error('Erro ao atualizar a tarefa:', err);
      },
    });
  }

  openAddTaskModal(): void {
    this.isModalOpen = true;
  }

  closeAddTaskModal(): void {
    this.isModalOpen = false;
  }

  saveTask(): void {
    if (!this.newTaskName.trim()) {
      alert('Por favor, dê um nome para a tarefa.');
      return;
    }

    const newTask = {
      title: this.newTaskName,
      pomosEstimated: this.newPomoCount,
      pomosCompleted: 0,
      isCompleted: false,
    };
    this.taskService.addTask(newTask).subscribe({
      next: (savedTask) => {
        this.tasks.push(savedTask);
        if (!this.activeTask) {
          this.activeTask = savedTask;
        }
        this.newTaskName = '';
        this.newPomoCount = 1;
        this.closeAddTaskModal();
      },
      error: (err) => console.error('Erro ao salvar a tarefa:', err),
    });
  }
}
