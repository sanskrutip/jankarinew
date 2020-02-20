import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficelistComponent } from './officelist.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { OfficelistRoutingModule } from './officelist-routing.module';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [OfficelistComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    OfficelistRoutingModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule
    
  ]
})
export class OfficelistModule { }
