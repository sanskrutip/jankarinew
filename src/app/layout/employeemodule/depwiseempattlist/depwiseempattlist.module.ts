import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepwiseempattlistComponent } from './depwiseempattlist.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { DepwiseempattlistRoutingModule } from './depwiseempattlist-routing.module';



@NgModule({
  declarations: [DepwiseempattlistComponent],
  imports: [
    CommonModule,
    DepwiseempattlistRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})

export class DepwiseempattlistModule { }



