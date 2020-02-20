import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiAddEditContactComponent } from './idi-add-edit-contact.component';

const routes: Routes = [
  { 
      path: '',
      component: IdiAddEditContactComponent,
     
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class IdiAddEditContactRoutingModule { }

