import { Injectable } from '@angular/core'
import { AbstractControl, AsyncValidator, ValidationErrors, ValidatorFn } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { delay } from 'rxjs/operators'

export const authValidator: ValidatorFn = (control: AbstractControl): null | ValidationErrors => {
  const username = control.get('username')
  const password = control.get('password')
  const valid =
    username && password && username.value && password.value && username.value === 'kemp'
      ? null
      : { authValidator: true }

  return valid
}

@Injectable()
export class AccountLoginValidatorService implements AsyncValidator {
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return of({
      accountLoginValidate: true
    }).pipe(delay(1000))
  }
}
