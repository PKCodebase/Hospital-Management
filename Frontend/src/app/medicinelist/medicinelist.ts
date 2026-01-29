import { Component, OnInit,ChangeDetectorRef} from '@angular/core';
import { Router } from '@angular/router';
import { MedicineService } from '../service/medicine.service';
import { Medicine } from '../class/medicine';


@Component({
  selector: 'app-medicinelist',
  standalone: false,  
  templateUrl: './medicinelist.html',
  styleUrl: './medicinelist.css',
})
export class Medicinelist implements OnInit {

  
  


  medicines:Medicine[]=[];
  constructor(private medicineService:MedicineService,private cdr: ChangeDetectorRef,private router:Router){}

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

  update(id:number){
     this.router.navigate(['update-medicine',id]);
  }

  delete(id:number){
      if(confirm('Are you sure you want to delete this medicine?')){
        console.log('Deleting medicine with ID:', id);
        this.medicineService.deleteMedicine(id).subscribe({
          next:(response)=>{
            console.log('Delete response:', response);
            alert('Medicine deleted successfully');
            this.getMedicines();
          },
          error:(err) =>{
            console.error('Delete error details:', err);
            console.error('Error status:', err.status);
            console.error('Error message:', err.message);
            alert(`Failed to delete medicine: ${err.error?.message || err.message}`);
          }
        });
  }

}
}
