import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenattdetailsComponent } from './genattdetails.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenattdetailsRoutingModule } from './genattdetails-routing.module';
@NgModule({
  declarations: [GenattdetailsComponent],
  imports: [
    CommonModule,
    GenattdetailsRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule,
  ]
})
export class GenattdetailsModule { }
