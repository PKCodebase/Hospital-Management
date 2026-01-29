import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { AdminDash } from './admin-dash/admin-dash';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { FormsModule } from '@angular/forms';
import { Home } from './home/home';
import { Footer } from './footer/footer';
import { Docdash } from './docdash/docdash';
import { CreatePatient } from './create-patient/create-patient';
import { Medicinelist } from './medicinelist/medicinelist';
import { Medicine } from './class/medicine';
import { CreateMedicine } from './create-medicine/create-medicine';
import { UpdatePatient } from './update-patient/update-patient';
import { ViewComponent } from './view-component/view-component';
import { ViewMedicine } from './view-medicine/view-medicine';
import { UpdateMedicine } from './update-medicine/update-medicine';


@NgModule({
  declarations: [
    App,
    AdminDash,
    Appointment,
    CreateAppointment,
    Home,
    Footer,
    Docdash,
    CreatePatient,
    Medicinelist,
    CreateMedicine,
    UpdatePatient,
    ViewComponent,
    ViewMedicine,
    UpdateMedicine
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
