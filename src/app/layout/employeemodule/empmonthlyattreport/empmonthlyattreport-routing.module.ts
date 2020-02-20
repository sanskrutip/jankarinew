import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EmpmonthlyattreportComponent } from './empmonthlyattreport.component';


const routes: Routes = [
  {
      path: '',
      component: EmpmonthlyattreportComponent
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
export class EmpmonthlyattreportRoutingModule { }
