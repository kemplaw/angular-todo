import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { AuthService, authValidator } from '../shared'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  userInfoForm: FormGroup

  valid: boolean

  public get submitDisabled(): boolean {
    return this.userInfoForm.errors?.authValidator
  }

  constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) {
    this.initFormGroup()
  }

  initFormGroup() {
    this.userInfoForm = this.fb.group(
      {
        username: this.fb.control('', [Validators.required]),
        password: this.fb.control('', [Validators.required, Validators.minLength(6)])
      },
      {
        validators: authValidator
      }
    )
  }

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
