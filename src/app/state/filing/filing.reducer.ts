import { createReducer, on } from '@ngrx/store';
import { FilingRecord } from "src/app/filing/filng.model";
import { retrievedFilingRecordsAction } from "./filing.actions";

export const initialState: FilingRecord[] = [];
export const filingReducer = createReducer(
  initialState,
  on(retrievedFilingRecordsAction, (state, { records }) => records)
);
