import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { UserInfo } from '../types'
import { LoginService } from './services'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userInfo: UserInfo = {
    username: '',
    password: ''
  }

  valid: boolean

  constructor(private router: Router, private loginService: LoginService) {}

  handleLogin() {
    const valid = this.loginService.login(this.userInfo)
    this.valid = valid

    if (!valid) return false

    return this.router.navigateByUrl('/app')
  }
}
