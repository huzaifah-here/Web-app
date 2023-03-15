import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private dataS: DataService, private snackBar: MatSnackBar,private router:Router) { 
    
  }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  user = new User();
  hide= true;
  accessToken: any;

  onLogin() {
    console.log("Login Button pressed")
    this.dataS.login(this.user).subscribe(res => {
      console.log(res);
     
        this.accessToken = res;
    
      localStorage.setItem('token', this.accessToken.token);
      //this.dataS.setToken(this.accessToken.token);
      console.log("Access Token", this.accessToken.token);
      this.snackBar.open('Login Successfully', 'Close', { duration: 5000,horizontalPosition: 'center',
      verticalPosition: 'bottom' });
      this.router.navigate(['/profile']);
      // this.router.navigate(['/register-employees'])    
    }, (error) => {
      // Login failed due to invalid credentials
      this.snackBar.open('Invalid username or password', 'Dismiss', {
        duration: 3000,
        })
        
      })
//this.accessToken = localStorage.getItem('access_token');
  }

  togglePassword(event:MouseEvent) {
    event.stopPropagation();

    this.hide = !this.hide;
  }
}
