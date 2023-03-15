import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatFormFieldModule} from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatSelectModule } from '@angular/material/select';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterEmployeesComponent } from './components/register-employees/register-employees.component';
//import { SortByPipe } from './sort-by.pipe';
import { NgPipesModule  } from 'ngx-pipes';

import { MatMenu } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DetailEmployeesComponent } from './components/detail-employees/detail-employees.component';
import { UpdateEmployeesComponent } from './components/update-employees/update-employees.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    NavbarComponent,
    RegisterEmployeesComponent,
    DetailEmployeesComponent,
    UpdateEmployeesComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    MatMenuModule,MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,MatFormFieldModule,MatSelectModule,
    MatButtonModule, MatInputModule,MatCheckboxModule,MatRadioModule,MatCardModule,HttpClientModule ,
    MatSnackBarModule,NgPipesModule 
  ],
  providers: [MatSnackBarModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
