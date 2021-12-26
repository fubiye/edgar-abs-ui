import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, of, switchMap } from 'rxjs';
import { Accession } from '../filng.model';
import { Store } from '@ngrx/store';
import { selectedAccessionAction } from 'src/app/state/accession/accession.actions';

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
    private httpClient: HttpClient,
    private store: Store
  ) {
    this.accession$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const accession = {
          cik: params.get('cik'),
          accessionNum: params.get('accessionNum')
        } as Accession;
        this.store.dispatch(selectedAccessionAction({ accession }));
        return of(accession)
      })
    )
  }

  ngOnInit(): void {
    this.accession$.subscribe((accession: Accession) => {
      const accessionNum = accession.accessionNum?.replace(/-/g, '');
      this.httpClient.get(`/api/filing/${accession.cik}/${accessionNum}`).subscribe((filingIndex: any) => {
        this.index = filingIndex.directory;
        this.items = this.index.item.filter((item: any) => !item.type.includes('image'))
      })
    });
  }

}
