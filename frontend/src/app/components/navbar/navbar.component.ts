import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  name:any;
  constructor(private dataS:DataService, private router:Router){}
  isLoggedIn(){
    
    this.name = localStorage.getItem('name');
    if (!this.name){
      
      return true;
    }
    return localStorage.getItem('token') !== null;
  }
  logout(){
    this.dataS.logout();
    this.router.navigate(['/login']);
  }
}
