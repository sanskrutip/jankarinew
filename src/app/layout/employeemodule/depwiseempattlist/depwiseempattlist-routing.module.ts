import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DepwiseempattlistComponent } from './depwiseempattlist.component';

const routes: Routes = [
  {
      path: '', component: DepwiseempattlistComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DepwiseempattlistRoutingModule { }


