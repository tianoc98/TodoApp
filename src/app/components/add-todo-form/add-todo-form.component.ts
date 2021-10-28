import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit ,EventEmitter,Output } from '@angular/core';
import { Todo } from '../../Models/Todo';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();
  
  inputTodo:string = "";

  addTodo(){
    const todo: Todo={
      content:this.inputTodo,
      completed: false,
      edit:false
    };

    this.newTodoEvent.emit(todo)
    this.inputTodo = ""
    alert("Sukses Input Todo "+this.inputTodo)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
