import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PerempattlistComponent } from './perempattlist.component';


const routes: Routes = [
  {
      path: '', component: PerempattlistComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PerempattlistRoutingModule { }

