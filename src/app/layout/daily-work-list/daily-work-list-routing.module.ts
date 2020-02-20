import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DailyWorkListComponent } from './daily-work-list.component';


const routes: Routes = [
  {
      path: '', 
      component:  DailyWorkListComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DailyWorkListRoutingModule { }
