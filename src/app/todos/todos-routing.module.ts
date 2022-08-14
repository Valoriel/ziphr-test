import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodosComponent } from './todos.component';

const routes: Routes = [
  {
    path: '',
    component: TodosComponent,
  },
  {
    path: 'new',
    component: NewTodoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodosRoutingModule {
}
