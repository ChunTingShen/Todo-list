import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { TodoService } from './todo.service';
import * as TodoActions from './todo.actions';

import { loadTodosFailure } from './todo.actions';

@Injectable()
export class TodosEffects {

  constructor(
        private actions: Actions,
        private todosService: TodoService
      ) {}

  loadTodos = createEffect(() =>
    this.actions.pipe(
      ofType(TodoActions.loadTodo),
      mergeMap(() =>
        this.todosService.getTodos().pipe(
          //dispatch loadTodosSuccess action with successful map, adding valid todolist items
          map((todos) => TodoActions.loadTodosSuccess({ todos })),
          catchError((error) => of(TodoActions.loadTodosFailure({ error })))
        )
      )
    )
  );

}