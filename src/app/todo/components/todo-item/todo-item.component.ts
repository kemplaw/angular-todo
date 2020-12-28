import { Component, Input, OnInit } from '@angular/core'
import { Todo, TodoStatus } from 'src/app/shared'

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo
  todoStatusCheckboxValue = false

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.todo) {
      this.todoStatusCheckboxValue = this.todo.status === TodoStatus.completed
    }
  }

  handleChange() {
    this.todoStatusCheckboxValue = !this.todoStatusCheckboxValue
  }
}
