import { Routes } from '@angular/router';

import { ShowTaskComponent } from './show';
import { CreateTaskComponent } from './create';
import { UpdateTaskComponent } from './update';

export const TaskRoutes: Routes = [
  {
    path: 'tasks',
    redirectTo: 'tasks/list'
  },
  {
    path: 'tasks/list',
    component: ShowTaskComponent
  },
  {
    path: 'tasks/add',
    component: CreateTaskComponent
  },
  {
    path: 'tasks/edit/:id',
    component: UpdateTaskComponent
  }
];
