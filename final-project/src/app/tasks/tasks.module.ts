import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { TaskService, TaskDoneDirective } from './shared';
import { ShowTaskComponent } from './show';
import { CreateTaskComponent } from './create';
import { UpdateTaskComponent } from './update';
import { TasksRoutingComponent } from './tasks-routing.component';
import { TasksRoutingModule } from './tasks-routing.module';

@NgModule({
  declarations: [
    ShowTaskComponent,
    CreateTaskComponent,
    UpdateTaskComponent,
    TasksRoutingComponent,
    TaskDoneDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    FontAwesomeModule,
    TasksRoutingModule
  ],
  providers: [
    TaskService
  ]
})
export class TasksModule { }
