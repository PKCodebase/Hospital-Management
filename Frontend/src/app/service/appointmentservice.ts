import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointments } from '../class/appointments';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private httpClient:HttpClient){}

  private baseUrl ="http://localhost:8080/api/appointments"

  getAppointmentList():Observable<Appointments[]>{
    return this.httpClient.get<Appointments[]>(`${this.baseUrl}`)
  }

  createAppointment(appointment:Appointments):Observable<Appointments>{
    return this.httpClient.post<Appointments>(`${this.baseUrl}/insert`,appointment);
  }

  deleteAppointment(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  
}
