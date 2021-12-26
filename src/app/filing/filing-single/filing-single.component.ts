import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Accession } from '../filng.model';

@Component({
  selector: 'app-filing-single',
  templateUrl: './filing-single.component.html',
  styleUrls: ['./filing-single.component.css']
})
export class FilingSingleComponent implements OnInit {

  public accession$!: Observable<Accession>;
  public index: any;
  public items: any[] = [];
  public displayedColumns: string[] = ['name', 'size', 'last-modified'];
  constructor(
    private route: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    this.accession$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        return of({
          cik: params.get('cik'),
          accessionNum: params.get('accessionNum')
        } as Accession)
      })
    )
  }

  ngOnInit(): void {
    this.accession$.subscribe((accession: Accession) => {
      this.httpClient.get('/assets/example/1706403_000153949717000912_index.json').subscribe((filingIndex: any) => {
        this.index = filingIndex.directory;
        this.items = this.index.item.filter((item: any) => !item.type.includes('image'))
      })
    });
  }

}
