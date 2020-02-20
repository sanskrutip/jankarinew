import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PartnerlistComponent } from './partnerlist.component';

const routes: Routes = [
  {
      path: '',
      component: PartnerlistComponent
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
export class PartnerlistRoutingModule { }

