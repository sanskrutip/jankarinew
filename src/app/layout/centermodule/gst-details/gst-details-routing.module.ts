import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GstDetailsComponent } from './gst-details.component';


const routes: Routes = [
  { 
      path: '',
      component: GstDetailsComponent,
     
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
export class GstDetailsRoutingModule { }

