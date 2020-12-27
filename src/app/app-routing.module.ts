import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  DynamicFormBuilderComponent,
  FormContainerComponent,
  ReactiveFormComponent,
  TemplateFormComponent
} from './form-demo/components'

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login').then(m => m.LoginModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./todo').then(m => m.TodoModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./not-found').then(m => m.NotFoundModule)
  },
  {
    path: 'form-demo',
    component: FormContainerComponent,
    children: [
      {
        path: 'template-form',
        component: TemplateFormComponent
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent
      },
      {
        path: 'form-builder',
        component: DynamicFormBuilderComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
