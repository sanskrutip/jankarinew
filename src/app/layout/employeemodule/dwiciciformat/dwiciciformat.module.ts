import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DwiciciformatComponent } from './dwiciciformat.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DwiciciformatRoutingModule } from './dwiciciformat-routing.module';
import { PageHeaderModule, StatModule } from 'src/app/shared';
@NgModule({
  declarations: [DwiciciformatComponent],
  imports: [
    CommonModule,
    DwiciciformatRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class DwiciciformatModule { }
