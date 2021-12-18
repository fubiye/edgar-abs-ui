import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilingByYearComponent } from './filing-by-year/filing-by-year.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FilingByYearComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FilingByYearComponent
  ]
})
export class StatisticsModule { }
