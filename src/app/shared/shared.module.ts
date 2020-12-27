import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TabGroupComponent } from './components'
import {
  ForbiddenNameDirective,
  HighlightDirective,
  IdentityMatchedValidatorDirective
} from './directives'
import { AccountLoginValidatorService } from './services'

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [
    HighlightDirective,
    ForbiddenNameDirective,
    IdentityMatchedValidatorDirective,
    TabGroupComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HighlightDirective,
    ForbiddenNameDirective,
    IdentityMatchedValidatorDirective,
    TabGroupComponent
  ],
  providers: [AccountLoginValidatorService]
})
export class SharedModule {}
