import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../class/patient';

@Component({
  selector: 'app-view-component',
  standalone: false,
  templateUrl: './view-component.html',
  styleUrl: './view-component.css',
})
export class ViewComponent implements OnInit {

  id:number=0;
  patient:Patient=new Patient();

  constructor(private patientService:PatientService,private route:ActivatedRoute,private cdr:ChangeDetectorRef, private router: Router){}

    ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    console.log('Patient ID:', this.id);
    this.patientService.getPatientById(this.id).subscribe({
      next: (data) => {
        this.patient = data;
        console.log('Patient data loaded:', this.patient);
        console.log('Blood group:', this.patient.blood);
        console.log('Urgency:', this.patient.urgency);
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error loading patient:', error);
      }
    });
  }

  update(id: number) {
    this.router.navigate(['/update-patient', id]);
  }

}
