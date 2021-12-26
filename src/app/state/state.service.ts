import { Injectable } from "@angular/core";
import { Accession, FilingRecord } from "../filing/filng.model";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public filingRecords!: FilingRecord[];
  public accession!: Accession;
}
