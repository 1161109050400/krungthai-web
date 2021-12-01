import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAxaComponent } from './module/form-axa/form-axa.component';
import { LoginComponent } from './module/login/login.component';
import { FormRatingComponent } from './module/form-axa/form-rating/form-rating/form-rating.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './module/home-page/home-page.component';
import { FormRegisterComponent } from './module/form-register/form-register.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DashboardChartComponent } from './module/dashboard/dashboard-chart/dashboard-chart/dashboard-chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DashboardHospitalComponent } from './module/dashboard/dashboard-hospital/dashboard-hospital/dashboard-hospital.component';
import { DashboardInsuranceComponent } from './module/dashboard/dashboard- insurance/dashboard-insurance/dashboard-insurance.component';
import { DashboardCustomerComponent } from './module/dashboard/dashboard-customer/dashboard-customer/dashboard-customer.component';





@NgModule({
  declarations: [
    AppComponent,
    FormAxaComponent,
    LoginComponent,
    FormRatingComponent,
    HomePageComponent,
    FormRegisterComponent,
    DashboardComponent,
    DashboardChartComponent,
    DashboardHospitalComponent,
    DashboardInsuranceComponent,
    DashboardCustomerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HighchartsChartModule
    


  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
