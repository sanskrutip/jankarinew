import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterdetailComponent } from './centerdetail.component';
import { CenterdetailRoutingModule } from './centerdetail-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [CenterdetailComponent],
  imports: [
    CommonModule,
    CenterdetailRoutingModule ,
    TranslateModule,
    MatExpansionModule,
    ReactiveFormsModule, FormsModule,MatTabsModule
  ]
})
export class CenterdetailModule { }
