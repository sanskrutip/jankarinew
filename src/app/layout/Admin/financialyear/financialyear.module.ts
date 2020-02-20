import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialyearComponent } from './financialyear.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FinancialyearRoutingModule } from './financialyear-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [FinancialyearComponent],
  imports: [
    CommonModule,
    FinancialyearRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class FinancialyearModule { }


