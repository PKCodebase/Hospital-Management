import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDash } from './admin-dash/admin-dash';
import { Appointment } from './appointment/appointment';
import { CreateAppointment } from './create-appointment/create-appointment';

const routes: Routes = [
  {path:'', redirectTo:'/admin', pathMatch:'full'},
  {path:'admin',component:AdminDash},
  {path:'appointmentlist',component:Appointment},
  {path:'create-appointment',component:CreateAppointment}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
