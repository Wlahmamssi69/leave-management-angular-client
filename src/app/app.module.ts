import {NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponent } from './components/auth/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewLeaveComponent } from './components/leave/new-leave/new-leave.component';
import {MaterialModule} from "./material.module";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from "@angular/material/form-field";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import {SideBarComponent} from "./components/side-bar/side-bar.component";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './components/leave/calendar/calendar.component';
import { LeaveDetailComponent } from './components/leave/leave-detail/leave-detail.component';
import {LoginComponent} from "./components/auth/login/login.component"





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewLeaveComponent,
    SideBarComponent,
    CalendarComponent,
    LeaveDetailComponent,
    LoginComponent,
  ],
  imports: [
    TableComponent,
    DashboardComponent,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),

  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent],
  schemas:[
    NO_ERRORS_SCHEMA

  ]
})
export class AppModule { }
