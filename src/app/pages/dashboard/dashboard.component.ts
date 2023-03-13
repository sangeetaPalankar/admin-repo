import { Component } from '@angular/core';


const CARDS =[
  {
    name :"Doctors",
    count:"15485"
  },
  {
    name:"Patients",
    count:"15487845"
  },
  {
    name:"Nurses",
    count:"14887845"
  },
  {
    name:"Total Appointments",
    count:"154845"
  }

];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards= CARDS;

}



