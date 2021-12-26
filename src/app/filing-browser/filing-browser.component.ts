import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Company } from '../app.model';
import { FilingRecord } from '../filing/filng.model';
import { SearchOptions, SearchScope } from '../search/search.model';

@Component({
  selector: 'app-filing-browser',
  templateUrl: './filing-browser.component.html',
  styleUrls: ['./filing-browser.component.css']
})
export class FilingBrowserComponent implements OnInit {
  public searchOpts: SearchOptions = {
    scope: SearchScope.COMPANY
  }
  public company$!: Observable<Company>;
  public record: any;
  public records: FilingRecord[] = [];

  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.company$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return of({
          cik: params.get('cik'),
          name: ''
        } as Company)
      })
    );
  }

  ngOnInit(): void {
    this.company$.subscribe((company: Company) => {
      return this.httpClient.get("/assets/example/CIK0001706403.json")
        .subscribe(filings => {
          this.record = filings;
          const records = [] as FilingRecord[];
          const recentFilings = this.record.filings.recent;
          for (let idx = 0; idx < recentFilings.accessionNumber.length; idx++) {
            records.push({
              form: recentFilings.form[idx],
              fileNumber: recentFilings.fileNumber[idx],
              filmNumber: recentFilings.filmNumber[idx],
              items: recentFilings.items[idx],
              accessionNumber: recentFilings.accessionNumber[idx],
              filingDate: recentFilings.filingDate[idx],
              reportDate: recentFilings.reportDate[idx],
              acceptanceDateTime: recentFilings.acceptanceDateTime[idx],
              act: recentFilings.act[idx],
              size: recentFilings.size[idx],
              isXBRL: recentFilings.isXBRL[idx],
              isInlineXBRL: recentFilings.isInlineXBRL[idx],
              primaryDocument: recentFilings.primaryDocument[idx],
              primaryDocDescription: recentFilings.primaryDocDescription[idx]
            })
          }
          this.records = records;
        });
    });
  }

}
