import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DoctorAvailabilityComponent } from '../doctor-availability/doctor-availability.component';
import {MatSort,Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { DoctorListService } from './doctor-list.service';
import { HttpErrorResponse } from '@angular/common/http';

export class DoctorData {
  physicianEmail: string;
  startDate :string;
  endDate: string;
  availability: boolean;
}


const doctor_data: DoctorData[] = [];

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements OnInit, AfterViewInit{

  public doctors: DoctorData[];

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    private doctorService: DoctorListService){}
    private n:string;
    ngOnInit(): void {
      this.availablePhysicians();
    }

    

    public availablePhysicians():void{
      this.doctorService.availablePhysicians().subscribe(
        (response: DoctorData[])=> {
          this.doctors = response;
        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      )
    }

  displayedColumns: string[] = ['physicianEmail','startDate','endDate', 'availability','update', 'delete'];
  dataSource = new MatTableDataSource<DoctorData>(doctor_data);
  
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  openDialogUpdate(pemail:string){
    this.dialog.open(DoctorAvailabilityComponent);
    this.doctorService.setThatVar(pemail);
  }

  openDialogDelete(){
    this.dialog.open(DeleteConfirmationComponent);
  }

 //sorting table
  @ViewChild(MatSort) sort: MatSort;
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
//searching
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

