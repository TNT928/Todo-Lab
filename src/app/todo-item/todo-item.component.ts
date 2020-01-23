import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/Todo';


@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() newTodo: Todo;
  @Input() todo: Todo;
  @Input() id: number;
  @Output() onDelete = new EventEmitter();
  constructor() {


   }

  ngOnInit() {
  }

  // set dynamic class
  setClasses(){
    let classes = {
      todo:true,
      'completed': this.todo.completed
    }
     return classes
  }



  onToggle(todo){
    todo.completed= !todo.completed;
    
  }

  removeTodo(){
  this.onDelete.emit()
  
  }
 
}
