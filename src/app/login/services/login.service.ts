import { Injectable } from '@angular/core'
import { UserInfo } from 'src/app/types'

@Injectable()
export class LoginService {
  login(userInfo: UserInfo): boolean {
    if (userInfo.username === 'kemp' && userInfo.password === '1234') return true

    return false
  }
}
