import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchByTableColumnComponent } from './search-by-table-column/search-by-table-column.component';
import { DiagramComponent } from './diagram/diagram.component';
import { SearchByDirectoryComponent } from './search-by-directory/search-by-directory.component';
import { AdminComponent } from './admin/admin.component';
import { InspectorComponent } from './inspector/inspector.component';
import { DialogBodyComponent } from './admin/dialog-body/dialog-body.component';
import { DeleteDialogComponent } from './admin/dialogs/delete-dialog/delete-dialog.component';
import { CreateDialogComponent } from './admin/dialogs/create-dialog/create-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchByTableColumnComponent,
    DiagramComponent,
    SearchByDirectoryComponent,
    AdminComponent,
    InspectorComponent,
    DialogBodyComponent,
    DeleteDialogComponent,
    CreateDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    ReactiveFormsModule,
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    HttpClientModule,
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogBodyComponent],
})
export class AppModule {}
