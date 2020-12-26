import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { TabGroupComponent } from './components'
import { HighlightDirective } from './directives'

@NgModule({
  imports: [CommonModule],
  declarations: [TabGroupComponent, HighlightDirective],
  exports: [CommonModule, TabGroupComponent, HighlightDirective]
})
export class SharedModule {}
