import { Injectable } from '@angular/core'
import { TabFilterStatus } from '../model'

@Injectable({
  providedIn: 'root'
})
export class TabControlService {
  tabFilter: TabFilterStatus

  changeTabFilter(tabFilter: TabFilterStatus) {
    this.tabFilter = tabFilter
  }
}
