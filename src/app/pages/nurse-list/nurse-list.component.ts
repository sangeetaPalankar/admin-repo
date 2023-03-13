import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';


export interface NurseData {
  Id: number;
  name:string;
  delete:boolean;
  
}


const nurse_data: NurseData[] = [
  {Id: 1, name:'sangita palanker' ,delete:false},
  {Id: 2, name: 'eshvari burlaver',  delete:false},
  {Id: 3, name: 'mrunal barde',  delete:false},
  {Id: 4, name:'sidhhi bhende', delete:false},
  {Id: 1, name:'sangita palanker' ,  delete:false},
  {Id: 2, name: 'eshvari burlaver',  delete:false},
  {Id: 3, name: 'mrunal barde',   delete:false},
  

];
@Component({
  selector: 'app-nurse-list',
  templateUrl: './nurse-list.component.html',
  styleUrls: ['./nurse-list.component.scss']
})
export class NurseListComponent implements AfterViewInit{

  displayedColumns: string[] = ['Id','name','delete'];
  dataSource = new MatTableDataSource<NurseData>(nurse_data);
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
}


