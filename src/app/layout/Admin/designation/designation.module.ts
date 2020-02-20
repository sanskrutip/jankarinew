import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignationComponent } from './designation.component';

import { PageHeaderModule, StatModule } from 'src/app/shared';
import { DesignationRoutingModule } from './designation-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DesignationComponent],
  imports: [
    CommonModule,
    DesignationRoutingModule, PageHeaderModule,
    ReactiveFormsModule, FormsModule,NgxPaginationModule,
    StatModule,NgbModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
  ]
})
export class DesignationModule { }

