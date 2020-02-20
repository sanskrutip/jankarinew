import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeemenuComponent } from '../employeemenu/employeemenu.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { MatSortModule } from '@angular/material';
import { EmployeemenuRoutingModule } from './employeemenu-routing.module';


@NgModule({
  declarations: [EmployeemenuComponent],
  imports: [
    CommonModule,
    EmployeemenuRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule,MatSortModule
  ]
})
export class EmployeemenuModule { }








