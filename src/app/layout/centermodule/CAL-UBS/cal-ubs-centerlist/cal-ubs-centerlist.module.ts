import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CALUBSCenterlistComponent } from '../cal-ubs-centerlist/cal-ubs-centerlist.component';
import { CalUbsCenterlistRoutingModule } from './cal-ubs-centerlist-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';

@NgModule({
  declarations: [CALUBSCenterlistComponent],
  imports: [
    CommonModule,
    CalUbsCenterlistRoutingModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class CALUBSCenterlistModule { }
