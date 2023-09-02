import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { NewapplicationsComponent } from './Components/dashboard/newapplications/newapplications.component';
import { AllsalesComponent } from './Components/dashboard/allsales/allsales.component';
import { TspComponent } from './Components/dashboard/tsp/tsp.component';
import { ScheduleComponent } from './Components/dashboard/schedule/schedule.component';
import { EventComponent } from './Components/dashboard/event/event.component';
import { SideNavComponent } from './Components/pages/side-nav/side-nav.component';
import { HeaderComponent } from './Components/pages/header/header.component';
import { MainComponent } from './Components/dashboard/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewallComponent } from './Components/viewall/viewall.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { RenewalComponent } from './Components/renewal/renewal.component';
import { NewleadsComponent } from './Components/newleads/newleads.component';
import { ApiserviceService } from './services/apiservice.service';
import { NewleadserviceService } from './services/newleadservice.service';
import { RenewalapiserviceService } from './services/renewalapiservice.service';
import { ExpiredComponent } from './Components/expired/expired.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NewleadsformComponent } from './Components/newleadsform/newleadsform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { ApplicationdetailsComponent } from './Components/applicationdetails/applicationdetails.component';
import { AvatarModule } from 'ngx-avatar';
import { QuotationSummaryComponent } from './Components/quotation-summary/quotation-summary.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewapplicationsComponent,
    AllsalesComponent,
    TspComponent,
    ScheduleComponent,
    EventComponent,
    SideNavComponent,
    HeaderComponent,
    MainComponent,
    ViewallComponent,
    RenewalComponent,
    NewleadsComponent,
    ExpiredComponent,
    NewleadsformComponent,
    ApplicationdetailsComponent,
    QuotationSummaryComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    AvatarModule, FormsModule


  ],
  providers: [ApiserviceService, NewleadserviceService, RenewalapiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
