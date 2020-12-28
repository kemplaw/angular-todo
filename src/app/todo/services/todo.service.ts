import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs'
import { Todo, TodoStatus } from 'src/app/shared'

let todoId = 1
@Injectable()
export class TodoService {
  private todoList: Todo[] = []
  private todoList$ = new BehaviorSubject<Todo[]>([])

  getTodoList(): Observable<Todo[]> {
    return this.todoList$.asObservable()
  }

  addTodo(todoContent: string) {
    const newTodo: Todo = {
      id: todoId++,
      content: todoContent,
      status: TodoStatus.unCompleted
    }

    this.todoList.unshift(newTodo)
    this.todoList$.next([...this.todoList])
  }
}
