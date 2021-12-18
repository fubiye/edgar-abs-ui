import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';


import { SearchComponent } from './search/search.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DealComponent } from './deal/deal.component';
import { DocumentComponent } from './document/document.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { FilingBrowserComponent } from './filing-browser/filing-browser.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PortfolioComponent,
    DealComponent,
    DocumentComponent,
    HomeComponent,
    FilingBrowserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'portfolio', component: PortfolioComponent},
      {path:'deal', component: DealComponent},
      {path:'filing', component: FilingBrowserComponent},
      {path:'filing/:cik', component: FilingBrowserComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
