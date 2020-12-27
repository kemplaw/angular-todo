import { Injectable } from '@angular/core'
import { AbstractControl, AsyncValidator, AsyncValidatorFn, ValidationErrors } from '@angular/forms'
import { Observable } from 'rxjs'

@Injectable()
export class AccountLoginValidatorService implements AsyncValidator {
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return new Promise(resolve => {
      console.log(control)

      setTimeout(() => {
        resolve({
          accountLoginValidate: true
        })
      }, 1000)
    })
  }
}
