import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficedetailComponent } from './officedetail.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OfficedetailRoutingModule } from './officedetail-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [OfficedetailComponent],
  imports: [
    CommonModule,
    OfficedetailRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatIconModule
 
    
  ]
})
export class OfficedetailModule { }
