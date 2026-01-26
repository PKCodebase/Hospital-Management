import { Component } from '@angular/core';
import { Patient } from '../class/patient';
import { PatientService } from '../service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-patient',
  standalone: false,
  templateUrl: './create-patient.html',
  styleUrl: './create-patient.css',
})
export class CreatePatient {
  patient:Patient = new Patient();

  constructor(private patientService:PatientService,private router:Router){}


  savePatint(){
    this.patientService.createPatient(this.patient).subscribe(data=>{
      console.log(data);
      this.goToPatientList();
    })
  }

  onSubmit(){
    this.savePatint();
    console.log('Patient created successfully');
  }

  goToPatientList(){
    console.log('Navigating to doctor dashboard');
    this.router.navigate(['/docdash']);
  }

}
