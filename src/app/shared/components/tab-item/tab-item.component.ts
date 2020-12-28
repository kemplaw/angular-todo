import { Component, Input, OnInit } from '@angular/core'
import { Tab } from '../../model'
import { TabControlService } from '../../services'

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
