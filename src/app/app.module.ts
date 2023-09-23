import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GenerateComponent } from './components/screens/generate/generate.component';
import { ColorControlComponent } from './components/controls/color-control/color-control.component';
import { FileAreaComponent } from './components/controls/file-area/file-area.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
    ColorControlComponent,
    FileAreaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
