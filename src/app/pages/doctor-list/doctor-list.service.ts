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
  public myVar:String;
  constructor(
    private http: HttpClient
  ) {}

  public availablePhysicians(): Observable<DoctorData[]>{
    return this.http.get<DoctorData[]>(`${this.apiServerUrl}/physician-availability`);
  }

  


  public setThatVar(sangeeta: String) {
    this.myVar=sangeeta;
  }


  public getThatVar(){
    return this.myVar;
  }

}
