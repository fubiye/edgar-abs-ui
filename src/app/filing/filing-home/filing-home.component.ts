import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, switchMap, of } from 'rxjs';
import { Company } from 'src/app/app.model';
import { SearchOptions, SearchScope } from 'src/app/search/search.model';
import { selectedAccessionAction } from 'src/app/state/accession/accession.actions';
import { selectAccession } from 'src/app/state/accession/accession.selectors';
import { retrievedFilingRecordsAction } from 'src/app/state/filing/filing.actions';
import { Accession, FilingRecord } from '../filng.model';

@Component({
  selector: 'app-filing-home',
  templateUrl: './filing-home.component.html',
  styleUrls: ['./filing-home.component.css']
})
export class FilingHomeComponent implements OnInit {
  public accession$: Observable<Accession> = this.store.select(selectAccession);
  public searchOpts: SearchOptions = {
    scope: SearchScope.COMPANY
  }
  public company$!: Observable<Company>;
  public record: any;
  public records: FilingRecord[] = [];
  public infoExpanded: boolean = true;
  @ViewChild('detailExpansion')
  public detailExpansion!: MatExpansionPanel;
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private store: Store
  ) {
    this.company$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.store.dispatch(selectedAccessionAction({
          accession: { cik: params.get('cik') as string } as Accession
        }))
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
          this.store.dispatch(retrievedFilingRecordsAction({ records }))
        });
    });
    this.accession$.subscribe((accession: Accession) => {
      setTimeout(() => {
        this.infoExpanded = !accession || !accession.accessionNum;
      }, 100)
    })
  }

  public getExpanded() {
    return this.infoExpanded;
  }
}
