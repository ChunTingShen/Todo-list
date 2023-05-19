import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private todos: TodoService){}


  todolist:  Todo[] = [];


  ngOnInit(): void {
      this.todos.getTodos().subscribe((ele: Todo[])=>{
        // console.log(ele)

        for (let i = 0; i< ele.length; i++){
          this.todolist.push(ele[i])
        }

      })

  }


  todoCheck(item: Todo){
    if (item.completed){
      item.completed = false;
    } else {
      item.completed = true;
    }
  }

  deleteTodo(item: Todo){
    item.id = 0;
    console.log(item)

  }


  newTodo(text: string){
    
  }

}
