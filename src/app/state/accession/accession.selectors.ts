import { Accession } from "src/app/filing/filng.model";
import { createFeatureSelector } from '@ngrx/store';

export const selectAccession = createFeatureSelector<Accession>('accession');
