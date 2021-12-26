import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Accession } from '../filng.model';

@Component({
  selector: 'app-filing-file',
  templateUrl: './filing-file.component.html',
  styleUrls: ['./filing-file.component.css']
})
export class FilingFileComponent implements OnInit {
  public accession!: Accession;
  public html!: string;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        const accession = {
          cik: params.get('cik'),
          accessionNum: params.get('accessionNum'),
          fileName: params.get('fileName')
        } as Accession;
        this.accession = accession;
        this.loadFile();
      });
  }

  ngOnInit(): void {

  }

  loadFile(): void {
    const accessionNum = this.accession.accessionNum?.replace(/-/g, '');
    this.httpClient.get(`/api/filing/${this.accession?.cik}/${accessionNum}/${this.accession.fileName}`, { responseType: 'text' }).subscribe((html: any) => {
      this.html = html;
    })
  }

}
