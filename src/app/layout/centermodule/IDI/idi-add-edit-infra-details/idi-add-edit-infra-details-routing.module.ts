import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiAddEditInfraDetailsComponent } from './idi-add-edit-infra-details.component';

const routes: Routes = [
  { 
      path: '',
      component: IdiAddEditInfraDetailsComponent,
     
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IdiAddEditInfraDetailsRoutingModule { }

