import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { TodoService } from './todo.service';
import { Todo } from './todo.model';

import * as TodoActions from './todo.actions';
import * as TodoSelectors from './todo.selectors';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    // private todos: TodoService,
    private store: Store
    ){}


  todolist:  Todo[] = [];
  lastId: number = 0;

  todos!: Observable<Todo[]>;


  ngOnInit(): void {
      // this.todos.getTodos().subscribe((ele: Todo[])=>{
      //   // console.log(ele)

      //   for (let i = 0; i< ele.length; i++){
      //     this.todolist.push(ele[i])
      //   }
      //   this.lastId = ele.length;

      // })

    this.store.dispatch(TodoActions.loadTodo());
    this.todos = this.store.select(TodoSelectors.selectTodos);

  }


  todoCheck(item: Todo){
    if (item.completed){
      item.completed = false;
    } else {
      item.completed = true;
    }
  }

  deleteTodo(item: Todo){
    // item.id = 0;
    // console.log(item)
    this.store.dispatch(TodoActions.deleteTodo({id: item.id}))

  }


  newTodo(text: string){
    this.lastId ++;
    
    this.todolist.push()
  }

}
