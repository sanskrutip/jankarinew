import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UpdateperempattlistComponent } from './updateperempattlist.component';

const routes: Routes = [
  {
      path: '', component:  UpdateperempattlistComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UpdateperempattlistRoutingModule { }

