import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{

  todos!: Todo[];
  inputTodo:string = "";


  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
    }

    ondelete(id:number){
this.todos = this.todos.filter((v , i)=>i !== id)
    }

    addform(){
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })

      this.inputTodo = ''
    }

}
