import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TaskService, TaskDoneDirective } from './shared';
import { ShowTaskComponent } from './show';
import { CreateTaskComponent } from './create';
import { UpdateTaskComponent } from './update';

@NgModule({
  declarations: [
    ShowTaskComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    TaskDoneDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
