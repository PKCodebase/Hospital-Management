import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from '../class/medicine';

@Injectable({
  providedIn: 'root',
})
export class MedicineSercvice {

  constructor(private httpClient:HttpClient){}
  private baseUrl ="http://localhost:8080/api/medicines"

  getMedicineList():Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>(`${this.baseUrl}`);
  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseUrl}/insert`,medicine);
  }
}
