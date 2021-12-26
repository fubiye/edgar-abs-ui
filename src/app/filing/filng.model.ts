export interface FilingRecord {
  form: string;
  fileNumber: string;
  filmNumber: string;
  items: string;
  accessionNumber: string;
  filingDate: string;
  reportDate: string;
  acceptanceDateTime: string;
  act: string;
  size: number;
  isXBRL: number;
  isInlineXBRL: number;
  primaryDocument: string;
  primaryDocDescription: string;
}

export interface Accession {
  cik: string;
  accessionNum?: string;
  fileName?: string;
}

export interface LookUpData {
  submissionForms: { [key: string]: string },
  itemDescriptions: { [key: string]: string }
}
