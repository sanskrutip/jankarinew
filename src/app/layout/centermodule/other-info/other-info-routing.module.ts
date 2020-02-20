import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { OtherInfoComponent } from './other-info.component';


const routes: Routes = [
  { 
      path: '',
      component: OtherInfoComponent,
     
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
export class OtherInfoRoutingModule { }

