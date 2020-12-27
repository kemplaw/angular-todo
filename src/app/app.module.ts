import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { FormDemoModule } from './form-demo'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormDemoModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
