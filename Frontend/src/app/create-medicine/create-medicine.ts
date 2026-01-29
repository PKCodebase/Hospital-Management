import { Component } from '@angular/core';
import { Medicine } from '../class/medicine';
import { MedicineService } from '../service/medicine.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-medicine',
  standalone: false,
  templateUrl: './create-medicine.html',
  styleUrl: './create-medicine.css',
})
export class CreateMedicine {

  medicine:Medicine = new Medicine();

  constructor(private medicineService:MedicineService,private router:Router){}

  ngOnInit():void{} 

  saveMedicine(){
    this.medicineService.createMedicine(this.medicine).subscribe(data=>{  
      console.log(data);
      this.gotoMedicineList();

    });
  }

  onSubmit(){
   this.saveMedicine();
   console.log('Medicine created successfully');
  }

  gotoMedicineList(){
    console.log('Navigating to medicine list');
    this.router.navigate(['/medicines']);
  }


}
