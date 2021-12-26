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



@NgModule({
  declarations: [
    FilingTableComponent,
    FilingStatusComponent,
    FilingFormComponent,
    FilingHomeComponent,
    FilingSingleComponent
  ],
  imports: [
    MatExpansionModule,
    CommonModule,
    FilingRoutingModule,
    AgGridModule.withComponents([])
  ],
  exports: [
    FilingTableComponent
  ]
})
export class FilingModule { }
