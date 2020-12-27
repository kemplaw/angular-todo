import { Component } from '@angular/core'

@Component({
  template: `
    <div class="form-container">
      <a [routerLink]="['./template-form']" routerLinkActive="router-link-active">template-form</a>
      <span> | </span>
      <a [routerLink]="['./reactive-form']" routerLinkActive="router-link-active">reactive-form</a>
      <span> | </span>
      <a [routerLink]="['./form-builder']" routerLinkActive="router-link-active">form-builder</a>
      <router-outlet></router-outlet>
    </div>
  `
})
export class FormContainerComponent {
  constructor() {}
}
