import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadattendanceComponent } from './uploadattendance.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UploadattendanceRoutingModule } from './uploadattendance-routing.module';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule, MatGridList, MatGridListModule, MatDividerModule, MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatGridTile, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule, MatExpansionModule } from '@angular/material';
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [UploadattendanceComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    UploadattendanceRoutingModule, 
    PageHeaderModule,
    StatModule,

    MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule,
  MatDialogModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule,
  MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatDividerModule ,
  MatGridListModule,FormsModule, ReactiveFormsModule,
  MatInputModule,MatRadioModule,CdkTreeModule,CdkTableModule,CdkStepperModule,ScrollingModule,PortalModule,
  DragDropModule,A11yModule,FileUploadModule,ReactiveFormsModule, FormsModule,NgxPaginationModule,MatExpansionModule,MatFormFieldModule,MatInputModule

  ,FlexLayoutModule.withConfig({addFlexToParent: false})
  ]
})
export class UploadattendanceModule { }


