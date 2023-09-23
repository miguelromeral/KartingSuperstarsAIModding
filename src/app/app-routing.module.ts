import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateComponent } from './components/screens/generate/generate.component';

const routes: Routes = [
  { path: 'generate', component: GenerateComponent },
  { path: '', component: GenerateComponent },
  // Otras rutas pueden agregarse aquí
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



