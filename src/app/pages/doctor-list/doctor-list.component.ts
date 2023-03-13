import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { DoctorAvailabilityComponent } from '../doctor-availability/doctor-availability.component';

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

    
  }
  @ViewChild(MatDialog) dialog: MatDialog;
  openDialog() {
    this.dialog.open(DoctorAvailabilityComponent);
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;


}

