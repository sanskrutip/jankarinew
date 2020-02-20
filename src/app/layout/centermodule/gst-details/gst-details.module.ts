import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GstDetailsComponent } from './gst-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatInputModule, MatFormFieldModule, MatExpansionModule } from '@angular/material';
import { GstDetailsRoutingModule } from './gst-details-routing.module';

@NgModule({
  declarations: [GstDetailsComponent],
  imports: [
    CommonModule,
    GstDetailsRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class GstDetailsModule { }

