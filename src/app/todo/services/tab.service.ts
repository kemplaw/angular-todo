import { Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { Tab, TabFilterStatus } from 'src/app/shared'

@Injectable()
export class TabService {
  constructor() {}

  getTab(): Observable<Tab[]> {
    return of([
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
    ])
  }
}
