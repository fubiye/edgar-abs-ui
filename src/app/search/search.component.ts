import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchOptions, SearchResult, SearchScope } from './search.model';

const SEARCH_RESULT_LIMIT = 5;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()
  options!: SearchOptions;
  searchStr: string = '';
  inventory: string[] = [];
  results: any[] = [];
  timeoutId: any;
  public loading:boolean = false;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.http.get('/assets/edgar-mbs-2020.json').subscribe((companies: any) => {
      this.inventory = companies as string[];
    })
  }

  get hasSearchResult() {
    return this.loading || this.results.length > 0;
  }

  public onSearch(event: Event): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    if (this.isSearchEmpty()) {
      this.results = [];
      return;
    }
    this.timeoutId = setTimeout(() => {
      this.searchOnServer();
    }, 500)
  }

  searchByLocalInentory(){
    const query = this.searchStr.toLowerCase();
    const matched = this.inventory.filter(company => company.toLowerCase().includes(query));
    const length = matched.length > SEARCH_RESULT_LIMIT ? SEARCH_RESULT_LIMIT : matched.length;
    this.results = matched.slice(0, length).map((company) => {
      return {
        type: 'Company',
        content: company
      };
    });
  }

  searchOnServer(){
    this.loading = true;
    let params = new HttpParams();
    const scope = this.options?.scope ? this.options.scope : SearchScope.COMPANY;
    params = params.append("scope", scope).append("wd", this.searchStr);
    this.http.get("/api/s",{params: params}).subscribe((searchResultSet: any) => {
      this.loading = false;
      this.results = searchResultSet as SearchResult[];
    })
  }

  isSearchEmpty(): boolean {
    return !this.searchStr || this.searchStr.length === 0;
  }

  onItemClicked(item: SearchResult){
    this.router.navigate(['/filing', item.record.cik]);
    this.results = [];
  }

}
