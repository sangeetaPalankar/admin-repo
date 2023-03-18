import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DoctorAvailabilityComponent } from '../doctor-availability/doctor-availability.component';
import { DoctorAvailabilityService } from '../doctor-availability/doctor-availability.service';
import { DoctorData } from '../doctor-list/doctor-list.component';
import { DoctorListService } from '../doctor-list/doctor-list.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.scss']
})
export class DeleteConfirmationComponent {
  drName: string;


  constructor(
    private doctorService: DoctorListService,
    private doctorAvailability: DoctorAvailabilityService,
    public dialogRef: MatDialogRef<DoctorAvailabilityComponent>,
  ){};

  ngOnInit(){
    this.drName=this.doctorService.getThatVar();
  }


  

  onNoClick(): void {
    this.dialogRef.close();
  }



  onDeleteClick(){
    this.deletePhysician(this.drName);
  }


  public deletePhysician(doctor: string): void {
    this.doctorAvailability.deletePhysicianAvailability(doctor).subscribe(
      (response:any) => {
        console.log(response);
        this.doctorService.availablePhysiciansdelete(doctor);
        
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
