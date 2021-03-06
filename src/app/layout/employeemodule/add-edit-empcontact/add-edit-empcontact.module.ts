import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpcontactComponent } from './add-edit-empcontact.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddEditEmpcontactRoutingModule } from './add-edit-empcontact-routing.module';

@NgModule({
  declarations: [AddEditEmpcontactComponent],
  imports: [
    CommonModule,
    AddEditEmpcontactRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class AddEditEmpcontactModule { }
