import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort,Sort} from '@angular/material/sort';
import {LiveAnnouncer} from '@angular/cdk/a11y';


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


