import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  
  todos:Todo[]=[];

  toogleDone(id:number){
    this.todos.map((v, i) =>{
      if(i==id) v.completed = !v.completed;
      return v
    })
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((v,i) => i !== id);
    alert("ID = "+(id+1)+" SUKSES TERHAPUS")
  }

  addTodo(todo:Todo){
    this.todos.push(todo);
  }
  
  buttonTodo(id:number){
    this.todos.map((v, i) =>{
      if(i==id) v.edit = true;
      return v
    })
  }
  updateTodo(todo:Todo, id:number){
    this.todos.map((v, i) =>{
      if(i==id) v.content = todo.content; v.edit = false; v.completed = false;
      return v
    })
  }

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First Todo',
        completed: false,
        edit :false
      }, 
      {
        content: 'Second Todo',
        completed: false,
        edit:false
      },
    ]
  };

}
