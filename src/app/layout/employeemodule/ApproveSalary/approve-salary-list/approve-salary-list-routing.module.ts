import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ApproveSalaryListComponent } from './approve-salary-list.component';

const routes: Routes = [
  {
      path: '', component: ApproveSalaryListComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApproveSalaryListRoutingModule { }
