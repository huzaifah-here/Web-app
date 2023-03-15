import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  accessToken:any;
  constructor(private dataS:DataService, private route:ActivatedRoute, private router:Router){}
  employee = new Employee();
  data:any;
  ngOnInit() {
    
    //const id = Number(this.route.snapshot.paramMap.get('id'));
    this.accessToken = localStorage.getItem('token');
    console.log("Profile",this.accessToken);
    this.dataS.getEmpByToken(this.accessToken).subscribe(res => {
      this.data = res;
      this.employee = this.data
      localStorage.setItem('name', this.employee.name);
      console.log(res);
      
    })
  }
  onEdit(){
    this.router.navigate(['profile/edit/']);
    // this.dataS.getEmpByToken(this.accessToken).subscribe(res => {
    //   console.log(res);
    //   })
  }


}
