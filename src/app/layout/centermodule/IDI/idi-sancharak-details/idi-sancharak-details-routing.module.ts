import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiSancharakDetailsComponent } from './idi-sancharak-details.component';

const routes: Routes = [
  { 
      path: '',
      component: IdiSancharakDetailsComponent,
     
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
export class IdiSancharakDetailsRoutingModule { }
