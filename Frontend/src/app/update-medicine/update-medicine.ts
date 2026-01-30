import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Medicine } from '../class/medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.html',
  styleUrl: './update-medicine.css',
})
export class UpdateMedicine implements OnInit{
   id:number=0;
   medicine:Medicine = new Medicine();

   constructor(private route:ActivatedRoute,private medicineService:MedicineService,private router:Router, private cdr: ChangeDetectorRef){

   }

   ngOnInit(){
    this.id = this.route.snapshot.params['id'];
    
    this.medicineService.getMedicineById(this.id).subscribe({
      next: (data) => {
        this.medicine = data;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
   }

   onSubmit(){
    this.medicineService.updateMedicineById(this.id,this.medicine).subscribe(data=>{
      console.log(data);
      this.goToMedicine();
    })
   }

   goToMedicine(){
    this.router.navigate(['/medicines'])
   }

}
