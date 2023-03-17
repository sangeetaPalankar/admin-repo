import { Component, OnInit } from '@angular/core';
import { DoctorData } from '../doctor-list/doctor-list.component';
import { DoctorListService } from '../doctor-list/doctor-list.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DoctorAvailabilityService } from './doctor-availability.service';



@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.scss']
})
export class DoctorAvailabilityComponent {

  public doctors: DoctorData=new DoctorData();
  public editDoctorAvailability: DoctorData;
  public drName: string;
  public startDate:string;
  public endDate:string;
  public drName1:String;
  

  minDate: Date;
  maxDate: Date;

  constructor(
    private doctorService: DoctorListService,
    private doctorAvailability: DoctorAvailabilityService,
    
  ) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
    
  }
  tittle = 'datePicker';

  ngOnInit(){
    this.drName1=this.doctorService.getThatVar();
  }

  // public availablePhysicians():void{
  //   this.doctorService.availablePhysicians().subscribe(
  //     (response: DoctorData[])=> {
  //       this.doctors = response;
  //     },
  //     (error: HttpErrorResponse)=>{
  //       alert(error.message);
  //     }
  //   )
  // }

  // public updatedPhysicianAvailabilitys(doctor: DoctorData): void {
  //   this.doctorService.updatedPhysicianAvailabilitys(doctor).subscribe(
  //     (response: DoctorData) => {
  //       console.log(response);
  //       this.availablePhysicians();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }



  // minDate:any ="";
  // getDate(){
  //   var date:any = new Date();
  //   var toDate:any =date.getDate();
  //   if(toDate < 10){
  //     toDate = '0' + toDate;
  //   }
  //   var month:any = date.getMonth() +1;
  //   if(month <10){
  //     month = '0' + month;
  //   }
  //   var year = date.getFullYear();
  //   this.minDate = year+ "-" + month +"-" + toDate;
  //   console.log(this.minDate);

  // }

  printto(){
    console.log(this.doctorService.getThatVar());
  
  }
  
  selectedMatDate!:Date;
  


  public updatePhysicianAvailability(doctor: DoctorData): void {
    this.doctorAvailability.updatePhysicianAvailability(doctor).subscribe(
      (response: DoctorData) => {
        console.log(response);
        this.doctorService.availablePhysicians();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onClickSubmit 
    (arg0: any) {
    
    this.startDate=arg0.startDate;
    this.endDate=arg0.endDate;
    this.doctors.physicianEmail=this.drName;
    this.doctors.startDate="06/06/2023";
    this.doctors.endDate="04/02/2023";
    this.doctors.availability=true;
    this.updatePhysicianAvailability(this.doctors);
    }


    

}
