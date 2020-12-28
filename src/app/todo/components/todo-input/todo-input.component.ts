import { Component, EventEmitter, OnInit, Output } from '@angular/core'

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnInit {
  @Output() addTodo: EventEmitter<string> = new EventEmitter()

  constructor() {}

  ngOnInit(): void {}

  handleEnterTodo(e: KeyboardEvent) {
    const target = e.target as HTMLInputElement
    if (e.key.toLowerCase() === 'enter') {
      this.addTodo.emit(target.value)
      target.value = ''
    }
  }
}
