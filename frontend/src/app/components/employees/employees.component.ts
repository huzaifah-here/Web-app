import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Employee } from 'src/app/model/employee';
import { HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']

})

export class EmployeesComponent {
  //employees:any;
  employee = new Employee();
  c_pass:string;
  //selectedHobbies: string[] = [];
  hobbies: any;
  constructor(private formBuilder: FormBuilder,
    private dataService:DataService, 
    private snackBar:MatSnackBar,
    private router:Router) {
      // this.employee.pass = '';
      this.c_pass = '';
    // this.hobbies = [
    //   { id: 0, name: 'food' },
    //   { id: 1, name: 'hiking' },
    //   { id: 2, name: 'watching movies' }
    // ];
  }
  empForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    number: new FormControl(''),
    hobbies:new FormControl(''),
    pass: new FormControl(''),
    c_pass: new FormControl('')

  })
  get passwordsMatch() {
    return this.employee.password === this.c_pass;
  }

  ngOnInit():void{
    this.hobbies = ['food', 'hiking', 'watching movies'];
    this.getEmployeesData();
  }
  getEmployeesData(){
    console.log("Hello")
  }
  get nameControl() {
    console.log(this.empForm.get('name'))
    return this.empForm.get('name');
  }
  
  onSubmit() {
    //console.log(this.selectedHobbies)
    //console.log(this.empForm.value)
    console.log(this.employee)
    // return false;
    this.dataService.onSubmit(this.employee).subscribe(res=>{
      console.log('User Added');
      this.snackBar.open('User added', 'Close', { duration: 5000,horizontalPosition: 'center',
      verticalPosition: 'bottom' });
      this.router.navigate(['/register-employees'])
      
    })
    }
}

