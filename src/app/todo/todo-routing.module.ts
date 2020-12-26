import { NgModule } from '@angular/core'
import { Route, RouterModule } from '@angular/router'
import { TodoComponent } from './todo.component'

const routes: Route[] = [
  {
    path: '',
    component: TodoComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {}
