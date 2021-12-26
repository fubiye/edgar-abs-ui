import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { filingReducer } from './filing/filing.reducer';
import { accessionReducer } from './accession/accession.reducer';
import { StateService } from './state.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      filingRecords: filingReducer,
      accession: accessionReducer
    })
  ],
  providers: [
    StateService
  ]
})
export class StateModule { }
