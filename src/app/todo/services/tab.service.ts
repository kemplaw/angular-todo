import { Injectable } from '@angular/core'
import { Tab } from 'src/app/shared'
import { TabFilterStatus } from 'src/app/types'

@Injectable()
export class TabService {
  constructor() {}

  getTab(): Tab[] {
    return [
      {
        id: TabFilterStatus.all,
        content: 'all'
      },
      {
        id: TabFilterStatus.active,
        content: 'active'
      },
      {
        id: TabFilterStatus.completed,
        content: 'completed'
      }
    ]
  }
}
