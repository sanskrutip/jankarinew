import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DwiciciformatComponent } from './dwiciciformat.component';

const routes: Routes = [
  {
      path: '', component: DwiciciformatComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DwiciciformatRoutingModule { }
