import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/auth/login/login.component";
import {HomeComponent} from "./components/dashboard/home.component";
import {NewLeaveComponent} from "./components/leave/new-leave/new-leave.component";

const routes: Routes = [

  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redirect to the login page if the path is empty
  { path: 'login', component: LoginComponent },
  {
    path:'dashboard',
    component:HomeComponent
  },
  {
    path:'newLeave',
    component:NewLeaveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
