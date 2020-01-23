import { Component, OnInit, } from '@angular/core';
import {Todo} from '../models/Todo'



@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})


export class TodosComponent implements OnInit {

  
  todos:Todo[];
  searchText : string;

  constructor() { }

  ngOnInit() {




    this.todos= [
      {
        task: 'Fold Laundry',
        completed: false
      },
      {
        task: 'Wipe down stove',
        completed: false
      },
      { 
        task: 'Work on homework',
        completed: false
      },
      {
        task: 'Take out trash',
        completed: false
      }
    ]

  }

  addTodo(task){
   
    this.todos.push({task: task, completed: false})
   
  }
  removeTodo(i) {
    this.todos.splice(i, 1);
  }

  setSearchText($event) {
    this.searchText = $event;
  }
 

  

}
