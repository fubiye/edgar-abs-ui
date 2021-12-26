import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { FilingRecord } from '../../filng.model';

@Component({
  selector: 'app-filing-form',
  templateUrl: './filing-form.component.html',
  styleUrls: ['./filing-form.component.css']
})
export class FilingFormComponent implements ICellRendererAngularComp {
  public record!: FilingRecord;
  public params!: ICellRendererParams;
  constructor(
    private router: Router
  ) { }

  refresh(params: ICellRendererParams): boolean {
    return true;
  }
  agInit(params: ICellRendererParams): void {
    this.params = params;
    this.record = params.data;
  }
}
