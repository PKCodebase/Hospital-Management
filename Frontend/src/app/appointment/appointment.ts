import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import { AppointmentService } from '../service/appointmentservice';
import { Appointments } from '../class/appointments';



@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.html',
  styleUrl: './appointment.css',
})
export class Appointment implements OnInit  {

  appointments:Appointments[] = [];

  constructor(private appointmentService:AppointmentService,private cdr: ChangeDetectorRef){}

  ngOnInit(): void {
    this.getAllAppointments();
  }


  getAllAppointments(){
    this.appointmentService.getAppointmentList().subscribe({
      next:(data) =>{
        this.appointments = data;
        this.cdr.detectChanges();
      },
      error:(error) =>{
        console.error("API Error:", error);
      }
    })
  }


  delete(id:number){
    this.appointmentService.deleteAppointment(id).subscribe({
     next:(data)=>{
      console.log("Appointment deleted successfully");
      this.cdr.detectChanges();
      this.getAllAppointments();
     }
  });


}
}
