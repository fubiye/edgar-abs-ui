import { createReducer, on } from '@ngrx/store';
import { Accession, FilingRecord } from "src/app/filing/filng.model";
import { selectedAccessionAction } from './accession.actions';


export const initialState: Accession = {};
export const accessionReducer = createReducer(
  initialState,
  on(selectedAccessionAction, (state, { accession }) => accession)
);
