import { Component, Input, OnInit } from '@angular/core'
import { TabFilterStatus } from 'src/app/types'

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

  constructor() {}

  ngOnInit(): void {}
}
