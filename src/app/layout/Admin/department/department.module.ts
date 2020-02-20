import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from '../department/department.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { DepartmentRoutingModule } from './department-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    DepartmentRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class DepartmentModule { }

