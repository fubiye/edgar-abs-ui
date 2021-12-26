import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-filing-status',
  templateUrl: './filing-status.component.html',
  styleUrls: ['./filing-status.component.css']
})
export class FilingStatusComponent implements OnInit, ICellRendererAngularComp {

  constructor() { }
  ngOnInit(): void {
  }

  refresh(params: ICellRendererParams): boolean {
    return false;
  }
  agInit(params: ICellRendererParams): void {

  }
}
