import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmployeeComponent } from './add-edit-employee.component';
import { AddEditEmployeeRoutingModule } from './add-edit-employee-routing.module';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
@NgModule({
  declarations: [AddEditEmployeeComponent],
  imports: [
    CommonModule,
    AddEditEmployeeRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class AddEditEmployeeModule { }
