import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  @ViewChild('taskForm', { static: true }) taskForm: NgForm;
  task: Task;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.task = new Task();
  }

  save(): void {
    if (this.taskForm.form.valid) {
      this.taskService.add(this.task);
      this.router.navigate(["/tasks"]);
    }
  }

}
