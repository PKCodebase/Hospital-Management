import { Component } from '@angular/core';
import { Appointments } from '../class/appointments';
import { AppointmentService } from '../service/appointmentservice';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-appointment',
  standalone: false,
  templateUrl: './create-appointment.html',
  styleUrl: './create-appointment.css',
})
export class CreateAppointment {

  appointment:Appointments = new Appointments();
  errors: any = {};

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
        if (error.error && error.error.errors) {
          this.errors = error.error.errors;
        }
      }
    });
  }

  onSubmit(form: NgForm) {
    this.errors = {};
    if (form.valid && this.validateForm()) {
      this.saveAppointment();
      console.log('Form submitted');
    }
  }

  validateForm(): boolean {
    this.errors = {};
    let isValid = true;

    // Name validation
    if (!this.appointment.name || this.appointment.name.trim().length < 2 || this.appointment.name.trim().length > 100) {
      this.errors.name = 'Name must be between 2 and 100 characters';
      isValid = false;
    }

    // Age validation
    const ageNum = parseInt(this.appointment.age || '');
    if (!this.appointment.age || !/^[0-9]{1,3}$/.test(this.appointment.age) || isNaN(ageNum) || ageNum < 1 || ageNum > 999) {
      this.errors.age = 'Age must be a valid number between 1-999';
      isValid = false;
    }

    // Symptoms validation
    if (!this.appointment.symtomps || this.appointment.symtomps.trim().length === 0) {
      this.errors.symtomps = 'Symptoms are required';
      isValid = false;
    } else if (this.appointment.symtomps.length > 500) {
      this.errors.symtomps = 'Symptoms cannot exceed 500 characters';
      isValid = false;
    }

    // Phone number validation
    if (!this.appointment.number || !/^[0-9]{10}$/.test(this.appointment.number)) {
      this.errors.number = 'Phone number must be exactly 10 digits';
      isValid = false;
    }

    return isValid;
  }

  goToAppointment(){
    this.router.navigate(['/appointmentlist']);
  }

}
