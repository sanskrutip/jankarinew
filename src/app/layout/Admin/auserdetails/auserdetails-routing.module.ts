import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuserdetailsComponent } from './auserdetails.component';


const routes: Routes = [
  {
      path: '', component: AuserdetailsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuserdetailsRoutingModule { }

