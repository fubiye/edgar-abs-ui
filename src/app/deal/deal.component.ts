import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.css']
})
export class DealComponent implements OnInit {
  deal = {
    dealName: 'BANK 2019-BNK22',
    certificate: 'Commercial Mortgage Pass-Through Certificates, Series 2019-BNK22.'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
