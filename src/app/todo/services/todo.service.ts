import { Injectable } from '@angular/core'
import { Todo, TodoStatus } from 'src/app/types'

@Injectable()
export class TodoService {
  constructor() {}

  getTodoList(): Todo[] {
    return [
      {
        id: 1,
        content: 'todo 1',
        status: TodoStatus.unCompleted
      },
      {
        id: 1,
        content: 'todo 2',
        status: TodoStatus.completed
      }
    ]
  }
}
