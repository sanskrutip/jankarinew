import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { InfraDetailsComponent } from './infra-details.component';

const routes: Routes = [
  { 
      path: '',
      component: InfraDetailsComponent,
     
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
export class InfraDetailsRoutingModule { }

