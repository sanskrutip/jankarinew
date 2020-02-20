import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IdiCenterCourseComponent } from './idi-center-course.component';

const routes: Routes = [
  { 
      path: '',
      component: IdiCenterCourseComponent,
     
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
export class IdiCenterCourseRoutingModule { }

