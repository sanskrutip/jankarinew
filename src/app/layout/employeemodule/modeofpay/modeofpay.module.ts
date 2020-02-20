import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModeofpayComponent } from './modeofpay.component';
import { ModeofpayRoutingModule } from './modeofpay-routing.module';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule, MatSortModule, MatPaginatorModule, MatDialogModule, MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule, MatDividerModule, MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatGridListModule, MatRadioModule } from '@angular/material';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { PortalModule } from '@angular/cdk/portal';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ModeofpayComponent],
  imports: [
    CommonModule,
    ModeofpayRoutingModule, 
    NgxPaginationModule,

    PageHeaderModule,
    StatModule,

    MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule,
  MatDialogModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule,
  MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatDividerModule ,
  MatGridListModule,FormsModule, ReactiveFormsModule,
  MatInputModule,MatRadioModule,CdkTreeModule,CdkTableModule,CdkStepperModule,ScrollingModule,PortalModule,
  DragDropModule,A11yModule,  

  FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class ModeofpayModule { }
