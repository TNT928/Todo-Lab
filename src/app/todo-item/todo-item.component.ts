import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() newTodo: Todo;
  @Input() todo: Todo;
  @Input() todos: Todo;
  @Input() id: number;

  
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
   this.todos.splice(this.id-1,1)
  
  }
  addTodo(task){
   
    this.todos.push({task: this.todo.task})
   
  }

  

 
}
