import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider'
import {MatSidenavModule} from '@angular/material/sidenav';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenav } from '@angular/material/sidenav';
import { HeaderComponent } from './includes/header/header.component';
import { FooterComponent } from './includes/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SideNavComponent } from './includes/side-nav/side-nav.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatTreeModule} from '@angular/material/tree';
import { NurseListComponent } from './pages/nurse-list/nurse-list.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { DoctorListComponent } from './pages/doctor-list/doctor-list.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { CardComponent } from './includes/card/card.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatBadgeModule} from '@angular/material/badge';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DoctorAvailabilityComponent } from './pages/doctor-availability/doctor-availability.component';
import {MatDialog} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DeleteConfirmationComponent } from './pages/delete-confirmation/delete-confirmation.component';
import { HttpClientModule } from '@angular/common/http';

const modules = [
  BrowserModule,
  AppRoutingModule,
  BrowserAnimationsModule,
  MatSliderModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatTreeModule,
  MatTableModule,
  MatPaginatorModule,
  MatButtonModule,
  FormsModule,
  MatIconModule,
 MatListModule,
 MatCardModule, 
 MatSelectModule, 
 MatBadgeModule, 
 MatTooltipModule, 
 MatDatepickerModule, 
 MatFormFieldModule,
 MatSortModule,
 MatInputModule,
 MatDialogModule,
 MatNativeDateModule,
 MatButtonToggleModule,
 
 ]

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent,
    NurseListComponent,
    PatientListComponent,
    DoctorListComponent,
    AdminListComponent,
    CardComponent,
    DoctorAvailabilityComponent,
    DeleteConfirmationComponent,
    
   
    
  ],
  imports: [
    CommonModule,
    modules,
    HttpClientModule,
    
   
    

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
