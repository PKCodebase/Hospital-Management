import { Component } from '@angular/core';
import { Appointments } from '../class/appointments';
import { AppointmentService } from '../service/appointmentservice';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.html',
  styleUrl: './create-appointment.css',
})
export class CreateAppointment {


  appointment:Appointments = new Appointments();

  constructor(private appointmentService:AppointmentService,private router:Router ){}

  saveAppointment(){
    console.log('Saving appointment:', this.appointment);
    this.appointmentService.createAppointment(this.appointment).subscribe({
      next: (data) => {
        console.log('Appointment saved successfully:', data);
        this.goToAppointment();
      },
      error: (error) => {
        console.error('Error saving appointment:', error);
      }
    });
  }

  onSubmit() {
    this.saveAppointment();
    console.log('Form submitted');
  }

  goToAppointment(){
    this.router.navigate(['/appointmentlist']);
  }

}
