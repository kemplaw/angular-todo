import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FormDemoModule } from './form-demo'
import { RxjsDemoComponent } from './rxjs-demo'

@NgModule({
  declarations: [AppComponent, RxjsDemoComponent],
  imports: [BrowserModule, AppRoutingModule, FormDemoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
