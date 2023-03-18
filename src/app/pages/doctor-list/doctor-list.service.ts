import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorData, DoctorListComponent } from './doctor-list.component';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DoctorListService {
  
  private apiServerUrl= environment.physicianAvailabilityUrl;
  public myVar:string;
  constructor(
    private http: HttpClient
  ) {}

  public availablePhysicians(): Observable<DoctorData[]>{
    return this.http.get<DoctorData[]>(`${this.apiServerUrl}/physician-availability`);
  }
  public availablePhysiciansUpdate(doctor:DoctorData): Observable<DoctorData[]>{
    return this.http.put<DoctorData[]>(`${this.apiServerUrl}/physician-availability`,doctor);


  }

  
  public availablePhysiciansdelete(doctor:string): Observable<string[]>{
    return this.http.delete<string[]>(`${this.apiServerUrl}/physician-availability/{doctor}`);
  }

  


  public setThatVar(sangeeta: string) {
    this.myVar=sangeeta;
  }


  public getThatVar(){
    return this.myVar;
  }

}
