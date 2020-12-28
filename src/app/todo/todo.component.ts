import { Component } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Tab, Todo } from '../shared'
import { TabService, TodoService } from './services'

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo.component.html',
  providers: [TabService, TodoService]
})
export class TodoComponent {
  tabs$: Observable<Tab[]> = of([])
  todoList$: Observable<Todo[]> = of([])

  constructor(private tabService: TabService, private todoService: TodoService) {
    this.tabs$ = this.tabService.getTab()
    this.todoList$ = this.todoService.getTodoList()
  }

  handleAddTodo(todoContent: string) {
    this.todoService.addTodo(todoContent)
  }
}
