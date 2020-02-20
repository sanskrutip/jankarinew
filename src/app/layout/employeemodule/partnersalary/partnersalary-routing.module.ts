import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PartnersalaryComponent } from './partnersalary.component';

const routes: Routes = [
  {
      path: '', component: PartnersalaryComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PartnersalaryRoutingModule { }
