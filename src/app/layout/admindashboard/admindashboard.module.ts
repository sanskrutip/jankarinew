import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from './admindashboard.component';
import { PageHeaderModule } from '../../shared';
import { AdmindashboardRoutingModule } from './admindashboard-routing.module';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule, MatDialogModule, MatPaginatorModule, MatSortModule, MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule, MatGridList, MatGridListModule, MatDividerModule, MatAutocompleteModule, MatChipsModule, MatFormFieldModule, MatGridTile, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule, MatPaginator } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AdmindashboardComponent],
  imports: [
    CommonModule,
    AdmindashboardRoutingModule, PageHeaderModule, ReactiveFormsModule, FormsModule,NgxPaginationModule,NgbModule,
    MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule,
    MatDialogModule, MatPaginatorModule, MatSortModule,
    MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule,
    MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatDividerModule ,
    MatGridListModule,FormsModule, ReactiveFormsModule,
    MatInputModule,MatRadioModule,
  ]
})
export class AdmindashboardModule { }
