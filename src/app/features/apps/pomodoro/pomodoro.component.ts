import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
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
  taskBeingEdited: Task | null = null;
  isEditing = false;
  tasks: Task[] = [];
  activeTask: Task | undefined;
  isPomodoroRunning = false;
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

    const storedRunning = localStorage.getItem('pomodoroRunning');
    this.isPomodoroRunning = storedRunning === 'true';

    if (this.isPomodoroRunning) {
      alert('Você ainda tem um pomodoro em andamento!');
    }
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasksFromServer) => {
      const startOfToday = new Date();
      startOfToday.setHours(0, 0, 0, 0);

      this.tasks = tasksFromServer.map((task) => {
        if (task.isCompleted && task.completionDate) {
          const completionDate = new Date(task.completionDate);

          if (completionDate < startOfToday) {
            return {
              ...task,
              isCompleted: false,
              pomosCompleted: 0,
              completionDate: null,
            };
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

  openEditTaskModal(task: Task): void {
    this.isEditing = true;
    this.taskBeingEdited = { ...task };
    this.newTaskName = task.title;
    this.newPomoCount = task.pomosEstimated;
    this.isModalOpen = true;
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
    this.isEditing = false;
    this.taskBeingEdited = null;
    this.newTaskName = '';
    this.newPomoCount = 1;
  }

  saveTask(): void {
    if (!this.newTaskName.trim()) {
      alert('Por favor, dê um nome para a tarefa.');
      return;
    }

    if (this.isEditing && this.taskBeingEdited) {
      const updatedTask = {
        ...this.taskBeingEdited,
        title: this.newTaskName,
        pomosEstimated: this.newPomoCount,
      };

      this.taskService.updateTask(updatedTask).subscribe({
        next: (taskFromServer) => {
          this.tasks = this.tasks.map((task) =>
            task.id === taskFromServer.id ? taskFromServer : task
          );
          if (this.activeTask?.id === taskFromServer.id) {
            this.activeTask = taskFromServer;
          }
          this.closeAddTaskModal();
        },
        error: (err) => console.error('Erro ao atualizar tarefa:', err),
      });
    } else {
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
          this.closeAddTaskModal();
        },
        error: (err) => console.error('Erro ao salvar a tarefa:', err),
      });
    }
  }

  @HostListener('window:beforeunload', ['$event'])
  handleBeforeUnload(event: BeforeUnloadEvent) {
    localStorage.setItem(
      'pomodoroRunning',
      JSON.stringify(this.isPomodoroRunning)
    );

    if (this.isPomodoroRunning) {
      event.preventDefault();
      event.returnValue =
        'Você tem um pomodoro em andamento. Deseja realmente sair?';
    }
  }

  startPomodoro(): void {
    this.isPomodoroRunning = true;
    localStorage.setItem('pomodoroRunning', 'true');
  }

  stopPomodoro(): void {
    this.isPomodoroRunning = false;
    localStorage.setItem('pomodoroRunning', 'false');
  }

  handleSkipTask(): void {
    if (!this.activeTask) return;

    const updatedTask = {
      ...this.activeTask,
      isCompleted: true,
      completionDate: new Date().toISOString(),
    };

    this.taskService.updateTask(updatedTask).subscribe({
      next: (taskFromServer) => {
        this.tasks = this.tasks.map((task) =>
          task.id === taskFromServer.id ? taskFromServer : task
        );

        const nextTask = this.tasks.find((t) => !t.isCompleted);
        this.activeTask = nextTask || undefined;
      },
      error: (err) => console.error('Erro ao pular tarefa:', err),
    });
  }
}
