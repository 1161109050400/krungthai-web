import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardInsuranceComponent } from './module/dashboard/dashboard- insurance/dashboard-insurance/dashboard-insurance.component';
import { DashboardChartComponent } from './module/dashboard/dashboard-chart/dashboard-chart/dashboard-chart.component';
import { DashboardCustomerComponent } from './module/dashboard/dashboard-customer/dashboard-customer/dashboard-customer.component';
import { DashboardHospitalComponent } from './module/dashboard/dashboard-hospital/dashboard-hospital/dashboard-hospital.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { DocumentInsuranceComponent } from './module/document/document-insurance/document-insurance.component';
import { FormAxaComponent } from './module/form-axa/form-axa.component';
import { FormRatingComponent } from './module/form-axa/form-rating/form-rating/form-rating.component';
import { FormRegisterComponent } from './module/form-register/form-register.component';
import { ContactPageComponent } from './module/home-page/contact-as/contact-page/contact-page.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { HospitalComponent } from './module/hospital/hospital/hospital.component';
import { DiseaseComponent } from './module/insurance-type/disease/disease/disease.component';
import { HealthComponent } from './module/insurance-type/health/health/health.component';
import { MoneyComponent } from './module/insurance-type/money/money/money.component';
import { RetireComponent } from './module/insurance-type/retire/retire/retire.component';
import { LoginComponent } from './module/login/login.component';
import { Ec10Component } from './module/result-insurance/10EC/ec10/ec10.component';
import { Pwlnp85Component } from './module/result-insurance/PWLNP85/pwlnp85/pwlnp85.component';
import { Rl05Component } from './module/result-insurance/RL05/rl05/rl05.component';
import { RpulComponent } from './module/result-insurance/RPUL/rpul/rpul.component';
import { WLANP85Component } from './module/result-insurance/WLANP85/wlanp85/wlanp85.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'form-axa',
    component: FormAxaComponent,
  },
  {
    path: 'form-rating',
    component: FormRatingComponent,
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: '', pathMatch: 'full' ,
    redirectTo: 'home-page',
  },
  {
    path: 'form-register',
    component: FormRegisterComponent,
  },
  {
    path: 'form-register',
    component: FormRegisterComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'dashboard-chart',
    component: DashboardChartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard-hospital',
    component: DashboardHospitalComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard-insurance',
    component: DashboardInsuranceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard-customer',
    component: DashboardCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'disease',
    component: DiseaseComponent,
  },
  {
    path: 'health',
    component: HealthComponent,
  },
  {
    path: 'money',
    component: MoneyComponent,
  },
  {
    path: 'retire',
    component: RetireComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  { path: 'wlanp85', 
    component: WLANP85Component 
  },
  { 
    path: 'pwlnp85', 
    component: Pwlnp85Component 
  },
  { 
    path: '10ec', 
    component: Ec10Component 
  },
  { 
    path: 'rl05', 
    component: Rl05Component 
  },

  { 
    path: 'rpul', 
    component: RpulComponent 
  },

  { 
    path: 'download', 
    component: DocumentInsuranceComponent 
  },

  { path: 'hospital', 
    component: HospitalComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
