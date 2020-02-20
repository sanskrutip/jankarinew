import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiAgreementComponent } from './idi-agreement.component';

const routes: Routes = [
  { 
      path: '',
      component: IdiAgreementComponent,
     
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
export class IdiAgreementRoutingModule { }
