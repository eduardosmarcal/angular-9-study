import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { TaskService, Task } from '../shared';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  faChevronLeft = faChevronLeft;

  @ViewChild('taskForm', { static: true }) taskForm: NgForm;
  task: Task;
  taskName: string;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.task = this.taskService.findById(id);
    this.taskName = this.task.name;
  }

  save(): void {
    if (this.taskForm.form.valid) {
      this.taskService.update(this.task);
      this.router.navigate(['/tasks']);
    }
  }
}
