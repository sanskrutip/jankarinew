import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GeneratesalaryComponent } from './generatesalary.component';


const routes: Routes = [
  {
      path: '', component: GeneratesalaryComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneratesalaryRoutingModule { }

