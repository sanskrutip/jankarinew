import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateattendanceComponent } from './generateattendance.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GenerateattendanceRoutingModule } from './generateattendance-routing.module';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule, MatGridList, MatGridListModule, MatDividerModule, MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatGridTile, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule } from '@angular/material';
import { MatProgressButtonsModule } from 'mat-progress-buttons';


@NgModule({
  declarations: [GenerateattendanceComponent],
  imports: [
    CommonModule,
    GenerateattendanceRoutingModule, 
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule,

  MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule,
  MatDialogModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule,
  MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatDividerModule ,
  MatGridListModule,FormsModule, ReactiveFormsModule,
  MatInputModule,MatRadioModule,MatProgressButtonsModule
  ]
})
export class GenerateattendanceModule { }



