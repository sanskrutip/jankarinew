import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateComponent } from '../state/state.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { StateRoutingModule } from './state-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    StateRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule
  ]
})
export class StateModule { }

