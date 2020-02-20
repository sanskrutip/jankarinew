import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AnnualgrosssalaryComponent } from './annualgrosssalary.component';

const routes: Routes = [
  {
      path: '', component:  AnnualgrosssalaryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AnnualgrosssalaryRoutingModule { }
