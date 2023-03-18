import { Component, OnInit } from '@angular/core';
import { DoctorData } from '../doctor-list/doctor-list.component';
import { DoctorListService } from '../doctor-list/doctor-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DoctorAvailabilityService } from './doctor-availability.service';
import { DatePipe } from '@angular/common';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';




@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.scss']
})
export class DoctorAvailabilityComponent {

  public doctors: DoctorData=new DoctorData();
  public editDoctorAvailability: DoctorData;
  public drName: string;
  public startDate:any;
  public endDate:any;
 

  

  minDate: Date;
  maxDate: Date;

  constructor(
    private doctorService: DoctorListService,
    private doctorAvailability: DoctorAvailabilityService,
    private datePipe:DatePipe,
    public dialogRef: MatDialogRef<DoctorAvailabilityComponent>,
   
    
    
  ) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    
  }
  tittle = 'datePicker';

  ngOnInit(){
    this.drName=this.doctorService.getThatVar();
  }

  

  printto(){
    console.log(this.doctorService.getThatVar());
  
  }
  
  selectedMatDate!:Date;
  


  public updatePhysicianAvailability(doctor: DoctorData): void {
    this.doctorAvailability.updatePhysicianAvailability(doctor).subscribe(
      (response: DoctorData) => {
        console.log(response);
        this.doctorService.availablePhysiciansUpdate(doctor);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  convertDate(a:any){
    return this.datePipe.transform(a,'yyyy-MM-dd');
  }

  onClickSubmit 
    (arg0: any) {
    console.log(arg0.startDate);
    let savebtn=document.getElementById("Save");
    let cancelbtn=document.getElementById("Cancel");

    this.startDate=this.convertDate(arg0.startDate);
    this.endDate=this.convertDate(arg0.endDate);
    
    this.doctors.physicianEmail=this.drName;
    this.doctors.startDate=this.startDate;
    this.doctors.endDate=this.endDate;
    console.log(this.doctors.startDate);
    console.log(this.doctors.endDate);
    
    this.doctors.availability=true;
    this.updatePhysicianAvailability(this.doctors);
    }

    onNoClick(): void {
      this.dialogRef.close();
    }


    

}
