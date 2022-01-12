import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { DiseaseComponent } from './module/insurance-type/disease/disease/disease.component';
import { HealthComponent } from './module/insurance-type/health/health/health.component';
import { MoneyComponent } from './module/insurance-type/money/money/money.component';
import { RetireComponent } from './module/insurance-type/retire/retire/retire.component';
import { ContactPageComponent } from './module/home-page/contact-as/contact-page/contact-page.component';
import { WLANP85Component } from './module/result-insurance/WLANP85/wlanp85/wlanp85.component';
import { Pwlnp85Component } from './module/result-insurance/PWLNP85/pwlnp85/pwlnp85.component';
import { Ec10Component } from './module/result-insurance/10EC/ec10/ec10.component';
import { Rl05Component } from './module/result-insurance/RL05/rl05/rl05.component';
import { RpulComponent } from './module/result-insurance/RPUL/rpul/rpul.component';
import { NgImageSliderModule } from 'ng-image-slider';



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
    DiseaseComponent,
    HealthComponent,
    MoneyComponent,
    RetireComponent,
    ContactPageComponent,
    WLANP85Component,
    Pwlnp85Component,
    Ec10Component,
    Rl05Component,
    RpulComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HighchartsChartModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      progressBar:true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    }),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgImageSliderModule

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
