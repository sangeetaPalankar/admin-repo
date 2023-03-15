import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PatientData, PatientListComponent } from "./patient-list.component";
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PatientListService{

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getPatients(): Observable<PatientData[]>{
      return this.http.get<PatientData[]>(`${this.apiServerUrl}/patient`);      
    }

}




 




  











