import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilingTableComponent } from './filing-table/filing-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { FilingStatusComponent } from './filing-renderers/filing-status/filing-status.component';
import { FilingFormComponent } from './filing-renderers/filing-form/filing-form.component';
import { FilingRoutingModule } from './filing-routing.module';
import { FilingHomeComponent } from './filing-home/filing-home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { FilingSingleComponent } from './filing-single/filing-single.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { FilingFileComponent } from './filing-file/filing-file.component';

@NgModule({
  declarations: [
    FilingTableComponent,
    FilingStatusComponent,
    FilingFormComponent,
    FilingHomeComponent,
    FilingSingleComponent,
    FilingFileComponent
  ],
  imports: [
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    BrowserModule,
    FilingRoutingModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    FilingTableComponent
  ]
})
export class FilingModule { }
