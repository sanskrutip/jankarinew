import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserroledetailsComponent } from './userroledetails.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserroledetailsRoutingModule } from './userroledetails-routing.module';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
@NgModule({
  declarations: [UserroledetailsComponent],
  imports: [
    CommonModule,
    UserroledetailsRoutingModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule,
    MatExpansionModule,MatFormFieldModule,MatInputModule
  ]
})
export class UserroledetailsModule { }
