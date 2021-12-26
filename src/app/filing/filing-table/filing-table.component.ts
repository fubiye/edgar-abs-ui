import { Component, Input, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { FilingRecord } from '../filng.model';

@Component({
  selector: 'app-filing-table',
  templateUrl: './filing-table.component.html',
  styleUrls: ['./filing-table.component.css']
})
export class FilingTableComponent implements OnInit {

  @Input()
  public records: FilingRecord[] = [];

  public columnDefs: ColDef[] = [{
    headerName: 'Form type',
    field: 'form',
    flex: 1
  }, {
    headerName: 'Filing Date',
    field: 'filingDate',
    flex: 1
  }, {
    headerName: 'Reporting Date',
    field: 'reportDate',
    flex: 1
  }, {
    headerName: 'Accession number',
    field: 'accessionNumber',
    flex: 1
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
