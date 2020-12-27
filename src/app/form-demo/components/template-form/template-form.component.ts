import { Component, OnInit } from '@angular/core'
import { UserInfo } from 'src/app/types'

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  accountInfo: UserInfo = {
    username: '',
    password: ''
  }

  constructor() {}

  ngOnInit(): void {}
}
