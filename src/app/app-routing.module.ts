import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to the login page if the path is empty
  { path: 'login', component: LoginComponent },
  {
    path:'dashboard',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
