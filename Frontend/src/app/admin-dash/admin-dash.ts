import { Component,OnInit, ChangeDetectorRef } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { Patient } from '../class/patient';

@Component({
  selector: 'app-admin-dash',
  standalone: false,
  templateUrl: './admin-dash.html', 
})
export class AdminDash implements OnInit {

  patients:Patient[] = [];

  constructor(private patientService:PatientService, private cdr: ChangeDetectorRef){}

  ngOnInit():void{
    this.getAllPatients();
  }

  getAllPatients(){
    this.patientService.getPatientList().subscribe({
      next: (data) => {
        this.patients = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("API Error:", error);
      }
    });
  }



}
