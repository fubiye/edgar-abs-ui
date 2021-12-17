import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const SEARCH_RESULT_LIMIT = 5;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string = '';
  inventory: string[] = [];
  results: any[] = [];
  timeoutId: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('/assets/edgar-mbs-2020.json').subscribe((companies: any) => {
      this.inventory = companies as string[];
    })
  }

  get hasSearchResult() {
    return this.results.length > 0;
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
      const query = this.searchStr.toLowerCase();
      const matched = this.inventory.filter(company => company.toLowerCase().includes(query));
      const length = matched.length > SEARCH_RESULT_LIMIT ? SEARCH_RESULT_LIMIT : matched.length;
      this.results = matched.slice(0, length).map((company) => {
        return {
          type: 'Company',
          content: company
        };
      });
    }, 500)
  }

  isSearchEmpty(): boolean {
    return !this.searchStr || this.searchStr.length === 0;
  }

}
