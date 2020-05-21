import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShowTaskComponent } from './show';
import { CreateTaskComponent } from './create';
import { UpdateTaskComponent } from './update';
import { TasksRoutingComponent } from './tasks-routing.component';

export const TasksRoutes: Routes = [
  {
    path: 'tasks',
    component: TasksRoutingComponent,
    children: [
      {
        path: '',
        component: ShowTaskComponent
      },
      {
        path: 'add',
        component: CreateTaskComponent
      },
      {
        path: 'edit/:id',
        component: UpdateTaskComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(TasksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TasksRoutingModule {}
