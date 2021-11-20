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



@NgModule({
  declarations: [
    AppComponent,
    FormAxaComponent,
    LoginComponent,
    FormRatingComponent,
    HomePageComponent,
    FormRegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
