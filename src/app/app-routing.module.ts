import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from "./components/auth/login/login.component";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {NewLeaveComponent} from "./components/leave/new-leave/new-leave.component";
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import {CalendarComponent} from "./components/leave/calendar/calendar.component";
import {LoginComponent} from "./components/auth/login/login.component";
const routes: Routes = [

  { path: '',
    redirectTo: 'login',
    pathMatch: 'full' },

  { path: 'login',
    component: LoginComponent },




  {
    path:'',
    component:SideBarComponent,
    children:[
      {
        path: 'dashboard',
        component: DashboardComponent
       },

      { path: 'newLeave', component: NewLeaveComponent},
      {path:'pendingLeaves',component:CalendarComponent},

    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
