import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DoctorData } from '../doctor-list/doctor-list.component';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorAvailabilityService {

apiServerUrl= environment.physicianAvailabilityUrl;
  constructor(private http: HttpClient){}


  public updatePhysicianAvailability(doctor: DoctorData): Observable<DoctorData>{
    return this.http.put<DoctorData>(`${this.apiServerUrl}/physician-availability`, doctor);
  }

   public deletePhysicianAvailability(doctorEmail: string): Observable<void>{
     return this.http.delete<void>(`${this.apiServerUrl}/physician-availability/${doctorEmail}`);
   }
}
