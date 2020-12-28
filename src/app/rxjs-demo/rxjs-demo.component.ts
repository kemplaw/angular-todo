import { Component, OnInit } from '@angular/core'
import { of } from 'rxjs'

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {
  observableData = of(1, 'a', { a: 1 })

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
}
