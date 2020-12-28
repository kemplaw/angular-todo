import { Injectable } from '@angular/core'
import { TabFilterStatus } from 'src/app/types'

@Injectable()
export class TabControlService {
  tabFilter: TabFilterStatus

  constructor() {}

  changeTabFilter(tabFilter: TabFilterStatus) {
    this.tabFilter = tabFilter
    console.log(tabFilter)
  }
}
