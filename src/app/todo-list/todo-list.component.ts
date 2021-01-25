import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todo!: Todo[];
  message!: String;

// todo = [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2, 'Become expert', false, new Date())
  //   // {id : 1, description: 'Learn to Dance'},
  //   // {id : 2, description: 'Become an expert'}
  // ]

  // todo = {id : 1, description: 'learn to dance'}

  constructor(
    private todoService:TodoDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
     this.todoService.retrieveAllTodos('in28minutes').subscribe(
      response => {
        console.log(response);
        this.todo = response;
      }
    )
  }

  deleteTodo(id: any){
    this.todoService.deleteTodo('in28minutes', id).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['todo'])
        this.message = `Delete of Todo ${id} Successful!` 
     }
    )
  }

  updateTodo(id:any){
    console.log(`update ${id}`);
    this.router.navigate(['todo', id]);
    
  }

  addTodo(){
    this.router.navigate(['todo', -1]);
  }

}
