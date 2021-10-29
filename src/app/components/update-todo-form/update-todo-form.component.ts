import { Component, OnInit,Output,EventEmitter ,Input} from '@angular/core';
import { Todo } from '../../Models/Todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-todo-form',
  templateUrl: './update-todo-form.component.html',
  styleUrls: ['./update-todo-form.component.css']
})
export class UpdateTodoFormComponent implements OnInit {
  @Output() newTodoEvent = new EventEmitter<Todo>();
  @Input() name :any

  
  updateTodo(form: NgForm){
    const {inputTodo} = form.value
    const todo: Todo={
      content:inputTodo,
      completed: false,
      edit:false
    };

    this.newTodoEvent.emit(todo)
    form.reset()
    alert("Sukses Update Todo ")
  }
  constructor() { }

  ngOnInit(): void {
  }

}
