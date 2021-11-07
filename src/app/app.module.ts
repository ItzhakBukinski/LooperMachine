import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { PadComponent } from './pad/pad.component';
import { HeaderComponent } from './header/header.component';
import { LoopPadsComponent } from './loop-pads/loop-pads.component';

@NgModule({
  declarations: [
    AppComponent,
    PadComponent,
    HeaderComponent,
    LoopPadsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeaderComponent],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
