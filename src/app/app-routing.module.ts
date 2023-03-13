import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DoctorListComponent } from './pages/doctor-list/doctor-list.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { HeaderComponent } from './includes/header/header.component';
import { NurseListComponent } from './pages/nurse-list/nurse-list.component';

const routes: Routes = [
  {
    path:"", component: HeaderComponent,
    children:[
  {
    path: '', component:DashboardComponent
  },
  {
    path:'profile', component:ProfileComponent
  },
  {
    path:'doctor-list', component:DoctorListComponent
  },
  {
    path:'nurse-list', component:NurseListComponent
  },
  {
    path:'patient-list', component:PatientListComponent
  },
  {
    path:'admin-list', component:AdminListComponent
  },
 
  
  
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
