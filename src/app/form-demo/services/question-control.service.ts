import { Injectable } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { QuestionBase } from '../components/dynamic-form-builder/types'

@Injectable()
export class QuestionControlService {
  constructor() {}

  toFormGroup(ques: QuestionBase<string>[]) {
    const group: any = {}

    ques.forEach(que => {
      group[que.key] = que.required
        ? new FormControl(que.value || '', Validators.required)
        : new FormControl(que.value || '')
    })

    return new FormGroup(group)
  }
}
