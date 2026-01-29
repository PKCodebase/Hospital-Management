import { Component } from '@angular/core';
import { Patient } from '../class/patient';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../service/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  standalone: false,
  templateUrl: './update-patient.html',
  styleUrl: './update-patient.css',
})
export class UpdatePatient {

  id:number=0;

  patient:Patient = new Patient();

  constructor(private route:ActivatedRoute,private patientService:PatientService,private router:Router){}

  ngOnInit():void{
     this.id=this.route.snapshot.params['id'];
     this.patientService.getPatientById(this.id).subscribe(data=>{
      this.patient=data;
     })
  }

  onSubmit(){
    this.patientService.updatePatientById(this.id,this.patient).subscribe(data=>{
      console.log(data);
      this.goToDocDash();
    })

  }

  goToDocDash(){
    this.router.navigate(['/docdash'])
  }


}
