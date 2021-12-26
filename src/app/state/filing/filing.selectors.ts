import { FilingRecord } from "src/app/filing/filng.model";
import { createSelector, createFeatureSelector } from '@ngrx/store';

export const selectFilingRecords = createFeatureSelector<FilingRecord[]>('filingRecords');
