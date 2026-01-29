import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../class/medicine';

@Injectable({
  providedIn: 'root',
})
export class MedicineService {

  constructor(private httpClient:HttpClient){}
  private baseUrl ="http://localhost:8080/api/medicines"

  getMedicineList():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseUrl}/insert`,medicine);
  }

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl}/${id}`);
  }

  updateMedicineById(id:number,medicine:Medicine):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,medicine);
  }
  deleteMedicine(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
