import { Component, OnInit,ChangeDetectorRef} from '@angular/core';import { MedicineSercvice } from '../service/medicine.service';
import { Medicine } from '../class/medicine';

@Component({
  selector: 'app-medicinelist',
  standalone: false,  
  templateUrl: './medicinelist.html',
  styleUrl: './medicinelist.css',
})
export class Medicinelist implements OnInit {


  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineSercvice,private cdr: ChangeDetectorRef){}

  ngOnInit():void{
    this.getMedicines();
  }


  getMedicines(){
     this.medicineService.getMedicineList().subscribe({
       next: (data) => {
         this.medicines = data;
         console.log('Medicines loaded:', data);
         this.cdr.detectChanges();
       },
       error: (error) => {
         console.error('Error loading medicines:', error);
       }
     });
  }

}
