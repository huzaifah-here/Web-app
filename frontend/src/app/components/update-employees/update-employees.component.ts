import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent {
  employee = new Employee();
  data: any;
  id: number;
  //sel:any;
  hobbies: any;
  sel = ['food']
  accessToken:any;
  //hobbies = ['reading', 'swimming', 'biking', 'cooking'];
  //hobbiesFormControl = new FormControl(['reading', 'swimming']);
  constructor(private dataS: DataService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router) {
    this.hobbies = ['food', 'hiking', 'watching movies'];
    this.id = 0;
    //this.sel = ['food']


    // this.employee.name="YO";
    //this.employee.name.setValue("YO");
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    //this.dataS.getUserById(id).subscribe();
    //console.log(this.employee)
  }
  compareCategoryObjects(object1: any, object2: any) {
    return object1 && object2 && object1.id == object2.id;
  }
  getData(id: number) {


    this.dataS.getUserById(id)
      .subscribe(res => {
        console.log('res', res);


        this.data = res;
        this.employee = this.data;

        console.log('data', this.employee);
        console.log('hobbies', this.employee.hobbies)
      }
      );
  }

  empForm2 = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
    number: new FormControl(''),
    hobbies: new FormControl('')

  })
  ngOnInit(): void {
    // this.id = Number(this.route.snapshot.paramMap.get('id'));
    // this.getData(this.id)
    this.accessToken = localStorage.getItem('token');
    this.dataS.getEmpByToken(this.accessToken).subscribe(res => {
      this.data = res;
      this.employee = this.data;
      console.log(this.employee);

      // let str = this.employee.hobbies;
      // this.employee.hobbies = str.replace(/\\/g, '');
      // console.log(this.employee.hobbies);
      
      })

    // const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.dataS.getUserById(id).subscribe(res => this.employee = res);
  }

  // onUpdate() {
  //   this.dataS.updateEmployee(this.employee, this.id).subscribe(res => {
  //     console.log(res)
  //     this.snackBar.open('User updated', 'Close', {
  //       duration: 5000, horizontalPosition: 'center',
  //       verticalPosition: 'bottom'
  //     });
  //     this.router.navigate(['/register-employees'])
  //   });
  // }
  onUpdate(){
    this.dataS.updateDataEmp(this.employee,this.accessToken).subscribe(res => {
          console.log(res)
          this.snackBar.open('User updated', 'Close', {
            duration: 5000, horizontalPosition: 'center',
            verticalPosition: 'bottom'
          });
          this.router.navigate(['/profile'])
        });
  }

}
