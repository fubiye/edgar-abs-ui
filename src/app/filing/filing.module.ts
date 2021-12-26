import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilingTableComponent } from './filing-table/filing-table.component';
import { AgGridModule } from 'ag-grid-angular';
import { FilingStatusComponent } from './filing-renderers/filing-status/filing-status.component';
import { FilingFormComponent } from './filing-renderers/filing-form/filing-form.component';



@NgModule({
  declarations: [
    FilingTableComponent,
    FilingStatusComponent,
    FilingFormComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    FilingTableComponent
  ]
})
export class FilingModule { }
