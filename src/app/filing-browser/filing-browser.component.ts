import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Company } from '../app.model';
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
      return this.httpClient.get("/assets/example/CIK0001706303.json")
        .subscribe(filings => {
          this.record = filings;
        });
    });
  }

}
