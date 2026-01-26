import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../class/patient';

@Injectable({
  providedIn: 'root',
})
export class PatientService {

  constructor(private httpClient:HttpClient){}

  private baseUrl ="http://localhost:8080/api/patients"

  getPatientList():Observable<Patient[]>{
    console.log("In patient service");
    return this.httpClient.get<Patient[]>(`${this.baseUrl}`)
  }

  deletePatient(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  createPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseUrl}/insert`,patient);
  }


  
}
