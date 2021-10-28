import { CompileTemplateMetadata } from '@angular/compiler';
import { Component, OnInit ,EventEmitter,Output } from '@angular/core';
import { Todo } from '../../Models/Todo';
import { NgForm } from '@angular/forms';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-add-todo-form',
  templateUrl: './add-todo-form.component.html',
  styleUrls: ['./add-todo-form.component.css']
})
export class AddTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();
  
  // inputTodo:string = "";
  data: Todo[] = []

  onSubmit(form: NgForm){
    const {inputTodo} = form.value
  
  }
  addTodo(form: NgForm){
    const {inputTodo} = form.value
    const todo: Todo={
      content:inputTodo,
      completed: false,
      edit:false
    };

    this.newTodoEvent.emit(todo)
    form.reset()
    alert("Sukses Input Todo ")
  }

  constructor() { }

  ngOnInit(): void {
  }

}
