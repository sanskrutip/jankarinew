import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditDocumentComponent } from './add-edit-document.component';
import { PageHeaderModule, StatModule } from 'src/app/shared';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { AddEditDocumentRoutingModule } from './add-edit-document-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddEditDocumentComponent],
  imports: [
    CommonModule,
    AddEditDocumentRoutingModule,
    NgxPaginationModule,
    PageHeaderModule,
    StatModule,
    FlexLayoutModule.withConfig({addFlexToParent: false}),
    ReactiveFormsModule, FormsModule,MatExpansionModule,MatFormFieldModule,MatInputModule,NgbModule
  ]
})
export class AddEditDocumentModule { }
