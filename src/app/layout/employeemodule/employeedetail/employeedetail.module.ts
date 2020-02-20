import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeedetailComponent } from '../employeedetail/employeedetail.component';

import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmployeedetailRoutingModule } from './employeedetail-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule, MatTabsModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [EmployeedetailComponent],
  imports: [
    CommonModule,
    EmployeedetailRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatIconModule,MatTabsModule
  ]
})
export class EmployeedetailModule { }



