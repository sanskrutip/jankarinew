import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditPartnerComponent } from '../add-edit-partner/add-edit-partner.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddEditPartnerRoutingModule } from './add-edit-partner-routing.module';

@NgModule({
  declarations: [AddEditPartnerComponent],
  imports: [
    CommonModule,
    AddEditPartnerRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class AddEditPartnerModule { }
