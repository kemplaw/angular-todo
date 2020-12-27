import { Component } from '@angular/core'
import { Tab } from '../shared'
import { Todo } from '../types'
import { TabService, TodoService } from './services'

@Component({
  selector: 'app-todo-container',
  templateUrl: './todo.component.html',
  providers: [TabService, TodoService]
})
export class TodoComponent {
  tabs: Tab[] = []
  todoList: Todo[] = []

  constructor(private tabService: TabService, private todoService: TodoService) {
    this.tabs = this.tabService.getTab()
    this.todoList = this.todoService.getTodoList()
  }
}
