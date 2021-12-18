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
  public searchOpts: SearchOptions =  {
    scope: SearchScope.COMPANY
  }
  public company$!: Observable<Company>;

  constructor(
    private route: ActivatedRoute
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
  }

}
