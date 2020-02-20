import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditEmpofficeComponent } from './add-edit-empoffice.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddEditEmpofficeRoutingModule } from './add-edit-empoffice-routing.module';

@NgModule({
  declarations: [AddEditEmpofficeComponent],
  imports: [
    CommonModule,
    AddEditEmpofficeRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule
    
    
  ]
})
export class AddEditEmpofficeModule { }
