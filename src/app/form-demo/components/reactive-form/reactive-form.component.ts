import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms'
import { forbiddenNameValidator, identityMatchedValidator } from '../../../shared'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  name = new FormControl('')

  // 手动构建响应式表单
  /* accountInfoFormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl('')
    })
  }) */

  // 使用 FromBuilder 便捷的生成响应式表单
  accountInfoFormGroup = this.formBuilder.group(
    {
      username: ['', [Validators.required, forbiddenNameValidator(/bob/i)]],
      password: [''],
      address: this.formBuilder.group({
        street: [''],
        city: ['']
      }),
      aliases: this.formBuilder.array([this.formBuilder.control('')])
    },
    { validators: identityMatchedValidator }
  )

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  get aliases() {
    return this.accountInfoFormGroup.get('aliases') as FormArray
  }

  addAliases() {
    this.aliases.push(this.formBuilder.control(''))
  }

  handleChangeFormControlValue() {
    this.name.setValue('foo bar')
  }

  handleFormGroupChange() {
    console.log(this.accountInfoFormGroup.value)
  }

  handlePatchFormGroupValue() {
    this.accountInfoFormGroup.patchValue({
      username: 'kemp',
      address: {
        city: 'bei jin'
      }
    })
  }
}
