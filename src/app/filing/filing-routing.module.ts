import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FilingHomeComponent } from "./filing-home/filing-home.component";
import { FilingSingleComponent } from "./filing-single/filing-single.component";
import { FilingTableComponent } from "./filing-table/filing-table.component";
const filingRoutes: Routes = [
  {
    path: 'filing/:cik',
    component: FilingHomeComponent,
    children: [{
      path: ':accessionNum', component: FilingSingleComponent
    }, {
      path: '**', component: FilingTableComponent
    }]
  }
];
@NgModule({
  imports: [RouterModule.forChild(filingRoutes)],
  exports: [RouterModule]
})
export class FilingRoutingModule { }
