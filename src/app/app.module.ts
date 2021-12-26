import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SearchComponent } from './search/search.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DealComponent } from './deal/deal.component';
import { DocumentComponent } from './document/document.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { FormsModule } from '@angular/forms';
import { FilingBrowserComponent } from './filing-browser/filing-browser.component';
import { StatisticsModule } from './statistics/statistics.module';
import { RelationshipComponent } from './relationship/relationship.component';
import { MatCardModule } from '@angular/material/card';
import { FilingModule } from './filing/filing.module';
import { StateModule } from './state/state.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PortfolioComponent,
    DealComponent,
    DocumentComponent,
    HomeComponent,
    FilingBrowserComponent,
    RelationshipComponent
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
    MatProgressSpinnerModule,
    MatCardModule,
    StatisticsModule,
    StateModule,
    FilingModule,
    AgGridModule.withComponents([]),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'portfolio', component: PortfolioComponent },
      { path: 'deal', component: DealComponent },
      { path: 'filing', component: FilingBrowserComponent }
    ], { paramsInheritanceStrategy: 'always' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
