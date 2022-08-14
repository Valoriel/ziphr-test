import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Todo } from 'src/app/shared/interfaces/todo';
import { TodoPriority } from '../../shared/enums/todo-priority';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {
  public todoForm: FormGroup | null = null;
  public priorityEnum = TodoPriority;
  public todos: Todo[] = [];

  constructor(
    private fb: FormBuilder,
    private appService: AppService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      priority: [1, Validators.required],
      date: ['', Validators.required],
      title: ['', Validators.required]
    })
  }

  ngOnDestroy(): void {
    this.submitTodos();
  }

  submitTodo() {
    if (this.todoForm?.valid) {
      console.log(this.todoForm?.value);
      this.todos.push(
        {
          ...this.todoForm.value,
          date: (new Date(this.todoForm?.get('date')?.value)).getTime(),
          done: false
        }
      )

      this.todoForm.reset({
        priority: 1
      })
    }
  }

  submitTodos() {
    this.appService.setNewTodos(this.todos);
  }

  goTomain() {
    this.router.navigateByUrl('/')
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  changePriority(priority: TodoPriority) {
    this.todoForm?.get('priority')?.patchValue(priority);
  }

}
