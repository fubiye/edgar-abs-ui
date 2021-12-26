import { createAction, props } from '@ngrx/store';
import { FilingRecord } from 'src/app/filing/filng.model';

export const retrievedFilingRecordsAction = createAction(
  '[Filing Record/API] Retrieve Filing Records Success',
  props<{ records: FilingRecord[] }>()
)

export const updateFilingRecordsAction = createAction(
  '',
  props<{ records: FilingRecord[] }>()
)
