import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDash } from './admin-dash/admin-dash';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';
import { Home } from './home/home';
import { Docdash } from './docdash/docdash';
import { CreatePatient } from './create-patient/create-patient';
import { Medicinelist } from './medicinelist/medicinelist';
import { CreateMedicine } from './create-medicine/create-medicine';
import { UpdatePatient } from './update-patient/update-patient';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'admin',component:AdminDash},
  {path:'appointmentlist',component:Appointment},
  {path:'create-appointment',component:CreateAppointment},
  {path:'home',component:Home},
  {path:'docdash',component:Docdash},
  {path:'create-patient',component:CreatePatient},
  {path:'medicines',component:Medicinelist},
  {path:'create-medicine',component:CreateMedicine},
  {path:'update-patient/:id',component:UpdatePatient}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
