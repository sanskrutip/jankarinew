import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AddDailyWorkComponent } from './add-daily-work.component';

const routes: Routes = [
  {
      path: '', 
      component:  AddDailyWorkComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddDailyWorkRoutingModule { }
