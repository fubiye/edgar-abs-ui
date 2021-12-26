import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { filingReducer } from './filing/filing.reducer';
import { accessionReducer } from './accession/accession.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      filingRecords: filingReducer,
      accession: accessionReducer
    })
  ]
})
export class StateModule { }
