import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AnkitComponent } from './ankit/ankit.component';
import { SachinComponent } from './sachin/sachin.component';
import { NitinComponent } from './nitin/nitin.component';
import { ServiceComponent } from './service/service.component';
import { AuditComponent } from './audit/audit.component';
import { TaxationComponent } from './taxation/taxation.component';
import { CorporateComponent } from './corporate/corporate.component';
import { ManagementComponent } from './management/management.component';
import { OthersComponent } from './others/others.component';
import { StartUpComponent } from './start-up/start-up.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnkitComponent,
    SachinComponent,
    NitinComponent,
    ServiceComponent,
    AuditComponent,
    TaxationComponent,
    CorporateComponent,
    ManagementComponent,
    OthersComponent,
    StartUpComponent,
    
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
