import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
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
export class UpdatePatient implements OnInit{

  id:number=0;

  patient:Patient = new Patient();

  constructor(private route:ActivatedRoute,private patientService:PatientService,private router:Router,private cdr: ChangeDetectorRef){}

  ngOnInit():void{
     this.id=this.route.snapshot.params['id'];
     console.log('Patient ID:', this.id);
     
     this.patientService.getPatientById(this.id).subscribe({
      next:(data)=>{
          console.log('API Response:', data);
          this.patient=data;
          console.log('Patient after assignment:', this.patient);
          this.cdr.detectChanges();
      },
      error:(error) =>{
        console.error('Error',error);
      }
     
     });
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
