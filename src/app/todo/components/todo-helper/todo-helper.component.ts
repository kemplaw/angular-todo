import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-todo-helper',
  templateUrl: './todo-helper.component.html',
  styleUrls: ['./todo-helper.component.css']
})
export class TodoHelperComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  handleClick(e: any) {
    console.log(e)
  }
}
