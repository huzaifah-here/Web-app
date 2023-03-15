import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailEmployeesComponent } from './components/detail-employees/detail-employees.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterEmployeesComponent } from './components/register-employees/register-employees.component';
import { UpdateEmployeesComponent } from './components/update-employees/update-employees.component';
import {ProfileComponent} from './components/profile/profile.component';
const routes: Routes = [
  { path: '', component: EmployeesComponent },
  { path: 'register-employees', component: RegisterEmployeesComponent },
  { path: 'employee/:id', component: DetailEmployeesComponent },
  { path: 'edit/:id', component: UpdateEmployeesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/edit', component: UpdateEmployeesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
