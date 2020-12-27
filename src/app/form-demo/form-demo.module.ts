import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { SharedModule } from '../shared/shared.module'
import {
  DynamicFormBuilderComponent,
  FormContainerComponent,
  ReactiveFormComponent,
  TemplateFormComponent
} from './components'

@NgModule({
  declarations: [
    TemplateFormComponent,
    ReactiveFormComponent,
    FormContainerComponent,
    DynamicFormBuilderComponent
  ],
  imports: [SharedModule, RouterModule]
})
export class FormDemoModule {}
