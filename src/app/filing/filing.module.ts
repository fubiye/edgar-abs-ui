import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilingTableComponent } from './filing-table/filing-table.component';
import { AgGridModule } from 'ag-grid-angular';



@NgModule({
  declarations: [
    FilingTableComponent
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
