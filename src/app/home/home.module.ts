import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeRoutingModule } from './home-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatModule } from '../shared';
import {
  MatToolbarModule, MatCardModule
} from '@angular/material';
import {MatIconModule} from '@angular/material/icon'
import {  MatFormFieldModule, MatSelectModule,MatTooltipModule } from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
   FormsModule,
    HomeRoutingModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    StatModule,
    FormsModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    NgbModule,
    MatToolbarModule, MatCardModule,MatIconModule,MatFormFieldModule, MatSelectModule,MatTooltipModule
  ], 
   declarations: [HomeComponent],

})
export class HomeModule { }
