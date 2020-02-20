import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailsComponent } from './userdetails.component';

const routes: Routes = [
  {
      path: '', component:  UserdetailsComponent
  }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
  
})
export class UserdetailsRoutingModule { }

