import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './module/dashboard/dashboard.component';
import { FormAxaComponent } from './module/form-axa/form-axa.component';
import { FormRatingComponent } from './module/form-axa/form-rating/form-rating/form-rating.component';
import { FormRegisterComponent } from './module/form-register/form-register.component';
import { HomePageComponent } from './module/home-page/home-page.component';
import { LoginComponent } from './module/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'krungthai/form-axa', component: FormAxaComponent },
  { path: 'krungthai/form-rating', component: FormRatingComponent },
  { path: 'krungthai/home-page', component: HomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'krungthai/home-page' },
  { path: 'krungthai/form-register', component: FormRegisterComponent },
  { path: 'krungthai/dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
