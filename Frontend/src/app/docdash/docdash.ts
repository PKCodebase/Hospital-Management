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

     constructor(private patientService:PatientService, private cdr: ChangeDetectorRef,private router:Router ){}

     ngOnInit():void{
        this.getPatients();
     }

     getPatients(){
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

  update(id:number){
    this.router.navigate(['update-patient',id]);
  }

     
}
