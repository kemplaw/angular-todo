import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { TodoRoutingModule } from './todo-routing.module'
import { TodoHelperComponent } from './components/todo-helper'
import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component'

@NgModule({
  imports: [SharedModule, TodoRoutingModule],
  declarations: [TodoComponent, TodoHelperComponent, TodoItemComponent, TodoInputComponent]
})
export class TodoModule {}
