import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort,Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { PatientListService } from './patient-list.service';

//Interface resembling Model Class
export interface PatientData {
  patientId: number;
  title:string;
  firstName:string;
  lastName:string;
  email:string;
  dob:string;
  contactNumber: string;
  address: string;
  gender:string;
}

let ELEMENT_DATA: PatientData[]=[
];


@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements AfterViewInit{

  constructor(
    private _liveAnnouncer: LiveAnnouncer,
    private patientListService: PatientListService,
    private cdr: ChangeDetectorRef
    ) {}

    ngOnInit(){
      this.getPatients(); 
      
      this.cdr.detectChanges();
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    ngAfterViewInit() {
      
    }
    
    public patients: PatientData[]; //datasource
    displayedColumns: string[] = ['patientId','title','firstName','lastName','email','dob','contactNumber','address','gender'];
    dataSource = new MatTableDataSource<PatientData>(ELEMENT_DATA);

    
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

  //sorting
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


    

    public getPatients():void{
      this.patientListService.getPatients().subscribe(
        (response: PatientData[])=> {
          this.patients= response;
          var len=this.patients.length;
          var i:number;
          for(i = 0;i<=len;i++) {
            ELEMENT_DATA.push(this.patients[i]);
         }
         this.dataSource = new MatTableDataSource<PatientData>(ELEMENT_DATA);
          console.log(ELEMENT_DATA);
          console.log("datasource:", this.dataSource);

        },
        (error: HttpErrorResponse)=>{
          alert(error.message);
        }
      );
    }
  
}
