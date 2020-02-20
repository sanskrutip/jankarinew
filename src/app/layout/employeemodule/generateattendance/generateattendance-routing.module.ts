import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GenerateattendanceComponent } from './generateattendance.component';

const routes: Routes = [
  {
      path: '', component: GenerateattendanceComponent
  }
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GenerateattendanceRoutingModule { }

