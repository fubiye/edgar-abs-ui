import { FilingRecord } from "../filing/filng.model";

export interface AppState {
  filingRecords: ReadonlyArray<FilingRecord>;
}
