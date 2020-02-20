import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerdetailComponent } from './partnerdetail.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PartnerdetailRoutingModule } from './partnerdetail-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [PartnerdetailComponent],
  imports: [
    CommonModule,
    PartnerdetailRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule,MatIconModule
  ]
})
export class PartnerdetailModule { }
