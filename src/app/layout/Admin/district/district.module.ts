import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistrictComponent } from './district.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { DistrictRoutingModule } from './district-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DistrictComponent],
  imports: [
    CommonModule,
    DistrictRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class DistrictModule { }



