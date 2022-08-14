import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { NewTodoComponent } from './new-todo/new-todo.component';

@NgModule({
  declarations: [
    TodosComponent,
    NewTodoComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class TodosModule {
}
