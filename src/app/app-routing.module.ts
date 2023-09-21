import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenerateComponent } from './generate/generate.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'generate', component: GenerateComponent },
  // Otras rutas pueden agregarse aquí
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



