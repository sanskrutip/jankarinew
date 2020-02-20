import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadattendanceComponent } from './uploadattendance.component';


const routes: Routes = [
  {
      path: '', component: UploadattendanceComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UploadattendanceRoutingModule { }
