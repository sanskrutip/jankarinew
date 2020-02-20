import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdiCenterCourseComponent } from './idi-center-course.component';
import { IdiCenterCourseRoutingModule } from './idi-center-course-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [IdiCenterCourseComponent],
  imports: [
    CommonModule,
    IdiCenterCourseRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class IdiCenterCourseModule { }
