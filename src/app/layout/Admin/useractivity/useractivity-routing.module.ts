import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { UseractivityComponent } from './useractivity.component';
const routes: Routes = [
  {
      path: '', 
      component:  UseractivityComponent
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UseractivityRoutingModule { }
