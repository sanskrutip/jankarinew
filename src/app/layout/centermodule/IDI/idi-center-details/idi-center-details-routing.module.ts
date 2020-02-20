import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiCenterDetailsComponent } from './idi-center-details.component';

const routes: Routes = [
  { 
      path: '',
      component: IdiCenterDetailsComponent,
     
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
export class IdiCenterDetailsRoutingModule { }

