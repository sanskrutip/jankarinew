import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PartnerdetailComponent } from './partnerdetail.component';

const routes: Routes = [
  {
      path: '',
      component: PartnerdetailComponent
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
export class PartnerdetailRoutingModule { }
