import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodosService {

  todos: Todo[] = [
    {id: 1, title: 'Make smth1', completed: false, isFav: true},
    {id: 2, title: 'Make smth2', completed: false, isFav: false},
    {id: 3, title: 'Make smth3', completed: false, isFav: true}
  ];

  getTodos(): Todo[]{
    return this.todos;
  };

  addTodo( todo ){
    this.todos.push( todo );
  };

  removeTodo( i ){
    this.todos.splice( i, 1 );
  };

  makeFav( i, isFav ){
    this.todos[ i ].isFav = isFav;
  }

}
