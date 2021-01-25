import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL, TODO_JPA_API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }

  retrieveAllTodos(username: any){
    console.log(username);
    return this.http.get<Todo[]>(`${TODO_JPA_API_URL}/users/${username}/todos`);
  }

  deleteTodo(username: any, id: any){
    return this.http.delete(`${TODO_JPA_API_URL}/users/${username}/todos/${id}`)
  }

  retrieveTodo(username: any, id: any){
    return this.http.get<Todo>(`${TODO_JPA_API_URL}/users/${username}/todo/${id}`)
  }

  updateTodo(username: any, id: any, todo:Todo){
    return this.http.put(`${TODO_JPA_API_URL}/users/${username}/todo/${id}`
                        , todo);
  }

  createTodo(username: any, todo:Todo){
    return this.http.post(`${TODO_JPA_API_URL}/users/${username}/todos`
                        , todo);
  }

}
