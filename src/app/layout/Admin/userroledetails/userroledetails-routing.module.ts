import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserroledetailsComponent } from './userroledetails.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
      path: '', component:  UserroledetailsComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserroledetailsRoutingModule { }
