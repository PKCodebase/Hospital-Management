import { Component,OnInit, ChangeDetectorRef } from '@angular/core';
import { Patient } from '../class/patient';
import { PatientService } from '../service/patient.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-docdash',
  standalone: false,
  templateUrl: './docdash.html',
  styleUrl: './docdash.css',
})
export class Docdash {
    patients:Patient[] =[];
    searchText: string = '';
    currentDate = new Date();

     constructor(private patientService:PatientService, private cdr: ChangeDetectorRef,private router:Router ){}

     ngOnInit():void{
        this.getPatients();
     }

     getPatients(){
     this.patientService.getPatientList().subscribe({
      next: (data) => {
        this.patients = data;
        console.log('Patients data:', data);
        console.log('First patient:', data[0]);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("API Error:", error);
      }
    });
  }

  update(id:number){
    this.router.navigate(['update-patient',id]);
  }

 delete(id: number) {
  if (confirm('Are you sure you want to delete this patient?')) {
    this.patientService.deletePatient(id).subscribe({
      next: () => {
        alert('Patient deleted successfully');
        this.getPatients();
      },
      error: (err) => {
        console.error(err);
        alert('Failed to delete patient');
      }
    });
  }
}


  view(id:number){
    this.router.navigate(['view-patient',id]);
  }

  searchPatients() {
    // Search functionality can be implemented here
  }

  getHighUrgencyCount() {
    return this.patients.filter(p => p.urgency === 'High' || p.urgency === 'HIGH').length;
  }

     
}
