import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register-employees',
  templateUrl: './register-employees.component.html',
  styleUrls: ['./register-employees.component.css']
})
export class RegisterEmployeesComponent {
  employee:any;

  constructor(private http:HttpClient,
    private dataS:DataService, 
    private route:ActivatedRoute,
    private snackBar:MatSnackBar,
    private router:Router){

  }
  ngOnInit():void{
    this.getData();
    //const id = Number(this.route.snapshot.paramMap.get('id'));
  }
  getData(){
    this.dataS.getData().subscribe(res=>{
      this.employee=res;
    });
  }
  editEmployee(id:number){
    console.log("Edit Button called")
    console.log(id);
    
    this.router.navigate(['/edit/'+id])
  }
  delEmployee(id:number){
    console.log("Del Button called")
    this.dataS.delEmployee(id).subscribe(
      (response) => {
        console.log("Employee deleted successfully");
        // refresh the employee list
        this.getData();
      },
      (error) => {
        console.log("Error deleting employee: ", error);
      }
    );
    this.snackBar.open('User Deleted', 'Close', { duration: 5000,horizontalPosition: 'center',
    verticalPosition: 'bottom' });
  }
  

}
