import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PortfolioComponent,
    DealComponent,
    DocumentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatExpansionModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      {path:'', component: HomeComponent},
      {path:'portfolio', component: PortfolioComponent},
      {path:'deal', component: DealComponent},
      {path:'document', component: DocumentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
