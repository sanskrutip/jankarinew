import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPartnerComponent } from './add-edit-partner.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
      path: '',
      component: AddEditPartnerComponent
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

export class AddEditPartnerRoutingModule { }
