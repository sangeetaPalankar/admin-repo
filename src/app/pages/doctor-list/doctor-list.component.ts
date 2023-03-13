import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DoctorAvailabilityComponent } from '../doctor-availability/doctor-availability.component';
import {MatSort,Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


import {MatDialog} from '@angular/material/dialog';
export interface DoctorData {
  Id: number;
  name:string;
  fdate:string;
  tdate:string;
  update:boolean;
  delete:boolean;
}


const doctor_data: DoctorData[] = [
  {Id: 1, name:'sangita palanker' , fdate:'11-7-2022',tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 2, name: 'eshvari burlaver', fdate:'11-7-2022',tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 3, name: 'mrunal barde',  fdate:'11-7-2022', tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 4, name:'sidhhi bhende',fdate:'11-7-2022',tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 1, name:'sangita palanker' , fdate:'11-7-2022',tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 2, name: 'eshvari burlaver', fdate:'11-7-2022',tdate:'11-7-2022' ,update:false , delete:false},
  {Id: 3, name: 'mrunal barde',  fdate:'11-7-2022', tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 4, name:'sidhhi bhende',fdate:'11-7-2022',tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 1, name:'sangita palanker' , fdate:'11-7-2022',tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 2, name: 'eshvari burlaver', fdate:'11-7-2022',tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 3, name: 'mrunal barde',  fdate:'11-7-2022', tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 4, name:'sidhhi bhende',fdate:'11-7-2022',tdate:'11-7-2022' ,update:false, delete:false},
  {Id: 1, name:'sangita palanker' , fdate:'11-7-2022',tdate:'11-7-2022' ,update:false, delete:false},
  
];
@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.scss']
})
export class DoctorListComponent implements AfterViewInit{

  // constructor(public dialog: MatDialog) {}

  displayedColumns: string[] = ['Id','name','fdate', 'tdate','update', 'delete'];
  dataSource = new MatTableDataSource<DoctorData>(doctor_data);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


    
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  @ViewChild(MatSort) sort: MatSort;

  announceSortChange(sortState: Sort) {
    
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}

