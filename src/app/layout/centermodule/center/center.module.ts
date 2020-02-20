import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterComponent } from './center.component';
import { CenterRoutingModule } from './center-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatSortModule } from '@angular/material';


@NgModule({
  declarations: [CenterComponent],
  imports: [
    CommonModule,
    CenterRoutingModule,
    TranslateModule,
    NgbDropdownModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,
    NgxPaginationModule,MatSortModule
    
  ],
  
})
export class CenterModule { }
