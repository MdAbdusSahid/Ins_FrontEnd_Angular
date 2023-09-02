import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationdetailsComponent } from './Components/applicationdetails/applicationdetails.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TspComponent } from './Components/dashboard/tsp/tsp.component';
import { ExpiredComponent } from './Components/expired/expired.component';
import { NewleadsComponent } from './Components/newleads/newleads.component';
import { NewleadsformComponent } from './Components/newleadsform/newleadsform.component';
import { RenewalComponent } from './Components/renewal/renewal.component';
import { ViewallComponent } from './Components/viewall/viewall.component';
import { QuotationSummaryComponent } from './Components/quotation-summary/quotation-summary.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'tsp', component: TspComponent },
  { path: 'viewall', component: ViewallComponent },
  { path: 'renewal', component: RenewalComponent },
  { path: 'newleads', component: NewleadsComponent },
  { path: 'expired', component: ExpiredComponent },
  { path: 'newleadform', component: NewleadsformComponent },
  { path: 'applicationdetails', component: ApplicationdetailsComponent },
  { path: 'quotitationsummary', component: QuotationSummaryComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
