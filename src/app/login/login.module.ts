import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule, MatCheckboxModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        LoginRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        FormsModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [LoginComponent]
})
export class LoginModule {}
