import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-detail-employees',
  templateUrl: './detail-employees.component.html',
  styleUrls: ['./detail-employees.component.css']
})
export class DetailEmployeesComponent {
  employee = new Employee();
  data:any;

  constructor(private dataS:DataService, private route:ActivatedRoute ){
    
   }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dataS.getUserById(id).subscribe(res => {
      this.data = res;
      this.employee = this.data
      console.log(res);
    })
    
  }
  // getUserById(id:number){
  //   this.dataS.getUserById(id).subscribe(res=>{
  //     this.employee=res;
  //   });
  // }
}

