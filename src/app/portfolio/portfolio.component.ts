import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  columnDefs: ColDef[] = [
    {
      headerName: 'Deal',
      field:'dealName',
      editable: true,
      flex: 1
    },
    {
      headerName: 'Class',
      field:'tranche',
      editable: true,
      flex: 1
    },
    {
      headerName: 'Original Balance',
      field:'origBalance',
      flex: 1
    },
    {
      headerName: 'Ratings',
      field:'ratings',
      flex: 1
    },
    {
      headerName: 'WAL',
      field:'wal',
      flex: 1
    },
    {
      headerName: 'CE%',
      field:'ce',
      flex: 1
    },
    {
      headerName: 'LTV',
      field:'ltv',
      flex: 1
    }
    // ,{
    //   headerName: 'Ending Balance',
    //   field:'manager'
    // },{
    //   headerName: 'Pass-Through Rate',
    //   field:'passThroughRate'
    // },{
    //   headerName: 'Size(MM)',
    //   field:'size'
    // }
  ];
  rowData = [{
    dealName: 'UBS 2019-C18',
    tranche: 'A-1',
    origBalance:'29,089,000',
    ratings:'AAAsf/AAA(sf)/Aaa(sf)',
    ratingAgencies: 'DBRS/Fitch/S&P	',
    wal: '2.81',
    ce: '30.000%',
    ltv: '41.7%'
  },{
    dealName: 'BANK 2019-BNK22',
    tranche: 'A-4',
    origBalance:'406,848,000',
    ratings:'AAA(sf)/AAAsf/AAA(sf)',
    ratingAgencies: 'DBRS/Fitch/S&P	',
    wal: '9.92',
    ce: '30.000%',
    ltv: '37.0%'
  },{

  },{

  },{

  },{

  },{

  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
