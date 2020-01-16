import { Component, OnInit } from '@angular/core';
import {Todo} from '../models/Todo'

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  
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

 

  

}
