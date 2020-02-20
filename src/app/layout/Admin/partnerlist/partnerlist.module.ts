import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerlistComponent } from './partnerlist.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PartnerlistRoutingModule } from './partnerlist-routing.module';

import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [PartnerlistComponent],
  imports: [
    CommonModule,
    PartnerlistRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule
  ]
})
export class PartnerlistModule { }