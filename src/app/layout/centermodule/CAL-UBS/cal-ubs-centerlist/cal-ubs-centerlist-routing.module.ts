import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CALUBSCenterlistComponent } from './cal-ubs-centerlist.component';
const routes: Routes = [
  { 
      path: '',
      component: CALUBSCenterlistComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CalUbsCenterlistRoutingModule { }
