import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort,Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


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
