import { Component, Input, OnInit } from '@angular/core'
import { TabFilterStatus } from 'src/app/types'
import { TabControlService } from '../tab-group/services'

export interface Tab {
  id: TabFilterStatus
  content: string
}

@Component({
  selector: 'app-tab-item',
  templateUrl: './tab-item.component.html',
  styleUrls: ['./tab-item.component.css']
})
export class TabItemComponent implements OnInit {
  @Input() tab: Tab

  constructor(private tabControlService: TabControlService) {}

  ngOnInit(): void {}

  handleChange() {
    this.tabControlService.changeTabFilter(this.tab.id)
  }
}
