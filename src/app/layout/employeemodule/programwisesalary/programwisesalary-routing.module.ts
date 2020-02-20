import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProgramwisesalaryComponent } from './programwisesalary.component';


const routes: Routes = [
  {
      path: '', component:  ProgramwisesalaryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProgramwisesalaryRoutingModule { }
