import { Component } from '@angular/core';
import { Medicine } from '../class/medicine';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../service/medicine.service';

@Component({
  selector: 'app-update-medicine',
  standalone: false,
  templateUrl: './update-medicine.html',
  styleUrl: './update-medicine.css',
})
export class UpdateMedicine {
   id:number=0;
   medicine:Medicine = new Medicine();

   constructor(private route:ActivatedRoute,private medicineService:MedicineService,private router:Router){

   }

   ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    })
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
