import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SmartUIModule } from '@ngpakistan/smart-ui';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SmartUIModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
