import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyleaveComponent } from './applyleave.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
      path: '', component: ApplyleaveComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplyleaveRoutingModule { }
