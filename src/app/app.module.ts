import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PadComponent } from './pad/pad.component';
import { HeaderComponent } from './header/header.component';
import { LoopPadsComponent } from './loop-pads/loop-pads.component';
import { RecordingComponent } from './header/recording/recording.component';

@NgModule({
  declarations: [
    AppComponent,
    PadComponent,
    HeaderComponent,
    LoopPadsComponent,
    RecordingComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
