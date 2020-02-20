import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SendemailComponent } from './sendemail.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SendemailRoutingModule } from './sendemail-routing.module';
@NgModule({
  declarations: [SendemailComponent],
  imports: [
    CommonModule,
    SendemailRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class SendemailModule { }
