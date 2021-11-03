import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAxaComponent } from './module/form-axa/form-axa.component';
import { LoginComponent } from './module/login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full' , redirectTo: 'home-page'},
  {path: 'login', component:LoginComponent},
  {path: 'krungthai/form-axa' , component:FormAxaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
