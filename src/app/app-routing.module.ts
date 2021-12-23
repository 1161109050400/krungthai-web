import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInsuranceComponent } from './module/dashboard/dashboard- insurance/dashboard-insurance/dashboard-insurance.component';
import { DashboardChartComponent } from './module/dashboard/dashboard-chart/dashboard-chart/dashboard-chart.component';
import { DashboardCustomerComponent } from './module/dashboard/dashboard-customer/dashboard-customer/dashboard-customer.component';
import { DashboardHospitalComponent } from './module/dashboard/dashboard-hospital/dashboard-hospital/dashboard-hospital.component';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { FormAxaComponent } from './module/form-axa/form-axa.component';
import { FormRatingComponent } from './module/form-axa/form-rating/form-rating/form-rating.component';
import { FormRegisterComponent } from './module/form-register/form-register.component';
import { ContactPageComponent } from './module/home-page/contact-as/contact-page/contact-page.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { DiseaseComponent } from './module/insurance-type/disease/disease/disease.component';
import { HealthComponent } from './module/insurance-type/health/health/health.component';
import { MoneyComponent } from './module/insurance-type/money/money/money.component';
import { RetireComponent } from './module/insurance-type/retire/retire/retire.component';
import { LoginComponent } from './module/login/login.component';
import { WLANP85Component } from './module/result-insurance/WLANP85/wlanp85/wlanp85.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'krungthai/form-axa', component: FormAxaComponent },
  { path: 'krungthai/form-rating', component: FormRatingComponent },
  { path: 'krungthai/home-page', component: HomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'krungthai/home-page' },
  { path: 'krungthai/form-register', component: FormRegisterComponent },
  { path: 'krungthai/dashboard', component: DashboardComponent },
  { path: 'krungthai/dashboard-chart', component: DashboardChartComponent },
  {path: 'krungthai/dashboard-hospital', component: DashboardHospitalComponent,},
  { path: 'krungthai/insurance', component: DashboardInsuranceComponent },
  { path: 'krungthai/customer', component: DashboardCustomerComponent },
  { path: 'krungthai/disease', component: DiseaseComponent },
  { path: 'krungthai/health', component: HealthComponent },
  { path: 'krungthai/money', component: MoneyComponent },
  { path: 'krungthai/retire', component: RetireComponent },
  { path: 'krungthai/contact', component: ContactPageComponent },
  { path: 'krungthai/wlanp85', component: WLANP85Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
