import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReportmenuComponent } from './reportmenu.component';


const routes: Routes = [
  {
      path: '', component:  ReportmenuComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReportmenuRoutingModule { }

