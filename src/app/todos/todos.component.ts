import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {

  todos = this.ts.getTodos();
  newTodo = {
    title: ''
  };

  constructor(
    private ts:TodosService
  ) {  }
  
  ngOnInit() {
    
  }

  addTodo(){
    let lastId = this.todos[ this.todos.length - 1 ].id;
    let todo = {
      id: ++lastId,
      title: this.newTodo.title,
      completed: false,
      isFav: false
    };
    this.ts.addTodo( todo );
    this.newTodo.title = '';
  };

  removeTodo( i ){
    this.ts.removeTodo( i );
  };

  makeFav( i, fav ){
    //console.log( fav )
    this.ts.makeFav( i, fav );
  }

}
