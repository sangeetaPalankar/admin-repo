import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface PatientData {
  Id: number;
  name:string;
  email:string;
  contact: string;
  
}


const patient_data: PatientData[] = [
  {Id: 1, name:'sangita palanker' , email:'sangita@gmail', contact:"1245876654"},
  {Id: 2, name: 'eshvari burlaver', email:'mrunal123@gmail',contact:"1245876654"},
  {Id: 3, name: 'mrunal barde',   email:'esh123@gmail', contact:"1245876654"},
  {Id: 4, name:'sidhhi bhende', email:'sidh123@gmail',contact:"1245876654"},
  {Id: 1, name:'sangita palanker' , email:'sangita@gmail', contact:"1245876654"},
  {Id: 2, name: 'eshvari burlaver', email:'mrunal123@gmail',contact:"1245876654"},
  {Id: 3, name: 'mrunal barde',   email:'esh123@gmail', contact:"1245876654"},
  {Id: 4, name:'sidhhi bhende', email:'sidh123@gmail',contact:"1245876654"},
  {Id: 1, name:'sangita palanker' , email:'sangita@gmail', contact:"1245876654"},
  {Id: 2, name: 'eshvari burlaver', email:'mrunal123@gmail',contact:"1245876654"},
  {Id: 3, name: 'mrunal barde',   email:'esh123@gmail', contact:"1245876654"},
  {Id: 4, name:'sidhhi bhende', email:'sidh123@gmail',contact:"1245876654"},

];
@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements AfterViewInit{

  displayedColumns: string[] = ['Id','name','email', 'contact'];
  dataSource = new MatTableDataSource<PatientData>(patient_data);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
}
