import { Accession, FilingRecord } from "../filing/filng.model";

export interface AppState {
  filingRecords: FilingRecord[];
  accession: Accession;
}
