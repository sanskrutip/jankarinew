import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiAddEditPartnerDetailsComponent } from './idi-add-edit-partner-details.component';




const routes: Routes = [
  { 
      path: '',
      component: IdiAddEditPartnerDetailsComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IdiAddEditPartnerDetailsRoutingModule { }


