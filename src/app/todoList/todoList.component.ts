import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: '../todoList/todoList.component.html',
  styleUrls: ['../todoList/todolist.component.scss']
})
export class TodoListComponent implements OnInit {
  avaiableTodos: any
  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        this.avaiableTodos = json;
      })
  }
}