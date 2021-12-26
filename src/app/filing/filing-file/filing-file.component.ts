import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Accession } from '../filng.model';

@Component({
  selector: 'app-filing-file',
  templateUrl: './filing-file.component.html',
  styleUrls: ['./filing-file.component.css']
})
export class FilingFileComponent implements OnInit {
  public accession$!: Observable<Accession>;
  public html!: string;
  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.httpClient.get('/assets/example/dbj17c06_absee-201707.htm', { responseType: 'text' }).subscribe((html: any) => {
      this.html = html;
    })
  }

}
