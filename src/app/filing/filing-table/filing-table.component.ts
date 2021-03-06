import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { FilingStatusComponent } from '../filing-renderers/filing-status/filing-status.component';
import { FilingRecord, LookUpData } from '../filng.model';
import { selectFilingRecords } from 'src/app/state/filing/filing.selectors';
import { FilingFormComponent } from '../filing-renderers/filing-form/filing-form.component';
import { updateFilingRecordsAction } from 'src/app/state/filing/filing.actions';
import { StateService } from 'src/app/state/state.service';

@Component({
  selector: 'app-filing-table',
  templateUrl: './filing-table.component.html',
  styleUrls: ['./filing-table.component.css']
})
export class FilingTableComponent implements OnInit {

  public columnDefs: ColDef[] = [{
    headerName: 'Form type',
    field: 'form',
    flex: 1
  }, {
    headerName: 'Form Description',
    cellRenderer: 'filingForm',
    valueGetter: (params) => {
      const form = params.data.form;
      const definedForm = this.lookup.submissionForms[params.data.form];
      if (!definedForm) {
        return `Form - ${form}`
      }
      const formDescription = this.lookup.submissionForms[params.data.form];
      return formDescription.split('|')[2]
    },
    flex: 3
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
  }, {
    headerName: 'Status',
    field: 'accessionNumber',
    cellRenderer: 'filingStatus',
    flex: 1
  }];

  public frameworkComponents = {
    filingForm: FilingFormComponent,
    filingStatus: FilingStatusComponent
  }

  @ViewChild('filingGrid')
  agGrid!: AgGridAngular;

  public lookup: LookUpData = {
    submissionForms: {},
    itemDescriptions: {}
  };
  constructor(
    private httpClient: HttpClient,
    private store: Store,
    private stateSvc: StateService
  ) { }

  ngOnInit(): void {
    this.httpClient.get('/assets/lookup-data.json').subscribe((lookup) => {
      this.lookup = lookup as LookUpData;
      this.agGrid.api.redrawRows();
    });
  }

  get records() {
    return this.stateSvc.filingRecords;
  }

}
