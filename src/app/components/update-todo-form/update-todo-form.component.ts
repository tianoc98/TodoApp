import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-update-todo-form',
  templateUrl: './update-todo-form.component.html',
  styleUrls: ['./update-todo-form.component.css']
})
export class UpdateTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();
  inputTodo:string = "";

  updateTodo(){
    const todo: Todo={
      content:this.inputTodo,
      completed: false,
      edit:false
    };

    this.newTodoEvent.emit(todo)
    this.inputTodo = ""
    alert("Sukses Update Todo ")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
