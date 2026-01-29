import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PatientService } from '../service/patient.service';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private patientService:PatientService,private route:ActivatedRoute,private cdr:ChangeDetectorRef){}

    ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log('Patient ID:', this.id);
    this.patientService.getPatientById(this.id).subscribe({
      next: (data) => {
        this.patient = data;
        this.cdr.detectChanges();
        console.log('Patient data loaded:', this.patient);
      },
      error: (error) => {
        console.error('Error loading patient:', error);
      }
    });
  }

}
