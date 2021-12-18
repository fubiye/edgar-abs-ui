export enum SearchScope {
  ALL = "ALL",
  COMPANY = "COMPANY"
}
export interface SearchOptions {
  scope: SearchScope
}

export interface SearchResult {
  record: any;
  type: string;
}
