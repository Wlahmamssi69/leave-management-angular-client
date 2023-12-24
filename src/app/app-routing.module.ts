import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/auth/login/login.component";
import { HomeComponent } from "./components/dashboard/home.component";
import { SideNavComponent } from './components/side-nav/side-nav.component';

const routes: Routes = [

  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to the login page if the path is empty
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: SideNavComponent },
  {path: 'test', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
