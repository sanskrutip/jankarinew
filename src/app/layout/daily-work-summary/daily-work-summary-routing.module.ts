import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DailyWorkSummaryComponent } from './daily-work-summary.component';


const routes: Routes = [
  {
      path: '', 
      component:  DailyWorkSummaryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DailyWorkSummaryRoutingModule { }
