import { Directive } from '@angular/core'
import {
  AbstractControl,
  FormGroup,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn
} from '@angular/forms'

export const identityMatchedValidator: ValidatorFn = (
  control: FormGroup
): ValidationErrors | null => {
  const username = control.get('username')
  const password = control.get('password')

  if (username && password && username.value === 'kemp' && password.value === '1234') return null

  return { identityMatched: true }
}

@Directive({
  selector: '[appIdentityMatched]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: IdentityMatchedValidatorDirective,
      multi: true
    }
  ]
})
export class IdentityMatchedValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return identityMatchedValidator(control)
  }
}
