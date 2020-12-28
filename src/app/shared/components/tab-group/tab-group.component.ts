import { Component } from '@angular/core'
import { TabControlService } from './services'

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  providers: [TabControlService]
})
export class TabGroupComponent {}
