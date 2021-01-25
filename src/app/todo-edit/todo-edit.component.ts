import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  id!: number;
  todo!: Todo;

  constructor(
    private todoService: TodoDataService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.todo = new Todo(this.id, '', false, new Date());

    if(this.id!=-1){
    this.todoService.retrieveTodo('in28minutes', this.id)
      .subscribe(
        data => this.todo = data 
      )
    }
  }

  saveTodo(){
    if(this.id ==-1){
      this.todoService.createTodo('in28minutes', this.todo)
      .subscribe(
        data => {
          this.router.navigate(['todo']);
        }
      )
    }
    else{
      this.todoService.updateTodo('in28minutes', this.id, this.todo)
      .subscribe(
        data => {
          this.router.navigate(['todo']);
        }
      )
    }
  }
}
