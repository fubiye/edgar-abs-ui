import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { filingReducer } from './filing/filing.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      filingRecords: filingReducer
    })
  ]
})
export class StateModule { }
