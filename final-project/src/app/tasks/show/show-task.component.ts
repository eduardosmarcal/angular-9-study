import { Component, OnInit } from '@angular/core';

import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.getAll();
  }

  getAll(): Task[] {
    return this.taskService.getAll();
  }

  delete(task: Task): void {
    if (confirm(`Are you sure you want to delete the task ${task.name}?`)) {
      this.taskService.delete(task.id);
      this.tasks = this.getAll();
    }
  }

  toggleStatus($event: any, task: Task): void {
    const newStatus = task.done ? 'NOT DONE' : 'DONE';
    if (confirm(`Are you sure you want to change the taks status to ${newStatus}?`)) {
      this.taskService.toggleStatus(task.id);
      this.tasks = this.getAll();
      return;
    }
    $event.preventDefault();
  }
}
