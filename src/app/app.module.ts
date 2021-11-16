import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormAxaComponent } from './module/form-axa/form-axa.component';
import { LoginComponent } from './module/login/login.component';
import { FormRatingComponent } from './module/form-axa/form-rating/form-rating/form-rating.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './module/home-page/home-page.component';



@NgModule({
  declarations: [
    AppComponent,
    FormAxaComponent,
    LoginComponent,
    FormRatingComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'login', component:LoginComponent ,} ,
      {path: 'krungthai/form-axa' , component:FormAxaComponent ,} ,
      {path: 'krungthai/form-rating' , component: FormRatingComponent ,} ,
      {path: 'krungthai/home-page' , component:HomePageComponent ,}
    ]) ,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
