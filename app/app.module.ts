import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { AppComponent } from '../app.component';
import { FormDialogComponent } from '../form-dialog.component';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({ declarations: [ AppComponent, FormDialogComponent ], imports: [ DropDownListModule, BrowserModule, DialogModule, FormsModule, TextBoxModule], providers: [], bootstrap: [AppComponent]
})
export class AppModule { }
