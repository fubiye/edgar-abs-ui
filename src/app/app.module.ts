import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SearchComponent } from './search/search.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DealComponent } from './deal/deal.component';
import { DocumentComponent } from './document/document.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PortfolioComponent,
    DealComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    RouterModule.forRoot([
      {path:'', component: SearchComponent},
      {path:'search', component: SearchComponent},
      {path:'portfolio', component: PortfolioComponent},
      {path:'deal', component: DealComponent},
      {path:'document', component: DocumentComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
