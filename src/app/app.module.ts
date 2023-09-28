import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { GenerateComponent } from './components/screens/generate/generate.component';
import { ColorControlComponent } from './components/controls/color-control/color-control.component';
import { FileAreaComponent } from './components/controls/file-area/file-area.component';
import { DropdownFormOptionComponent } from './components/controls/dropdown-form-option/dropdown-form-option.component';
import { PrevisualizeItemComponent } from './components/screens/previsualize-item/previsualize-item.component';
import { KartBaseComponent } from './components/karts/karts-components';
import { KartOfkComponent } from './components/karts/kart-ofk/kart-ofk.component';

@NgModule({
  declarations: [
    AppComponent,
    GenerateComponent,
    ColorControlComponent,
    FileAreaComponent,
    DropdownFormOptionComponent,
    PrevisualizeItemComponent,
    KartBaseComponent,
    KartOfkComponent
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
