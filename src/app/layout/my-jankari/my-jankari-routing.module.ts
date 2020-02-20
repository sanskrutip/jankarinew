import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MyJankariComponent } from './my-jankari.component';

const routes: Routes = [
  {
      path: '', 
      component:  MyJankariComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyJankariRoutingModule { }
