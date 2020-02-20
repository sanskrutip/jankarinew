import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpcontactComponent } from './add-edit-empcontact.component';


const routes: Routes = [
  {
      path: '',
      component: AddEditEmpcontactComponent
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
export class AddEditEmpcontactRoutingModule { }
