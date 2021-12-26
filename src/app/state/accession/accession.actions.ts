import { createAction, props } from '@ngrx/store';
import { Accession } from "src/app/filing/filng.model";

export const selectedAccessionAction = createAction(
  '[Filing Record/API] Retrieve Filing Records Success',
  props<{ accession: Accession }>()
)
