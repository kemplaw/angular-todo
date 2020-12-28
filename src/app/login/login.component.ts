import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AuthService } from '../shared'
import { UserInfo } from '../types'

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

  constructor(private router: Router, private authService: AuthService) {}

  handleLogin() {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        const redirectUrl = '/app'
        this.router.navigate([redirectUrl])
      }
    })
  }

  handleLogout() {
    this.authService.logout()
  }
}
