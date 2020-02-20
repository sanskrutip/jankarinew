import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiAddEditCenterInfoComponent } from './idi-add-edit-center-info.component';

const routes: Routes = [
  { 
      path: '',
      component: IdiAddEditCenterInfoComponent,
     
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
export class IdiAddEditCenterInfoRoutingModule { }


