import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CalnpifComponent } from './calnpif.component';

const routes: Routes = [
  { 
      path: '',
      component: CalnpifComponent,
     
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalnpifRoutingModule { }

