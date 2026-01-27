import { Component } from '@angular/core';
import { Patient } from '../class/patient';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.html',
  styleUrl: './update-patient.css',
})
export class UpdatePatient {

  patient:Patient = new Patient();

  constructor(){}


  onSubmit(){
    
  }


}
