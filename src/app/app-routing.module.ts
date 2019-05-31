import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Practica1Component } from 'src/app/practica1/practica1.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', component: Practica1Component},
  {path: 'practica1', component: Practica1Component},
  {path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
