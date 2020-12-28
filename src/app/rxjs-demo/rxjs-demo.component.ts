import { Component, OnInit } from '@angular/core'
import { BehaviorSubject, of } from 'rxjs'
import { map, switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
  observableData = of(1, 'a', { a: 1 })
  willSwitchMappedData = of(1, 2, 3)

  constructor() {}

  ngOnInit(): void {
    this.handleSubscribe()
  }

  handleSubscribe() {
    this.observableData.subscribe({
      next(v) {
        console.log('data: ', v)
      },
      error(err) {
        console.log('err: ', err)
      },
      complete() {
        console.log('completed')
      }
    })
  }

  handleSwitchMap() {
    this.willSwitchMappedData.pipe(switchMap(i => of(2 * i))).subscribe(v => console.log(v)) // 2, 4, 6
  }
}
