import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
@Injectable({
  providedIn: 'root'
})
export class DataService {
  token:string;
  constructor(private httpClient:HttpClient,) {  this.token=""}

  
  onSubmit(data:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/addemployees',data)
  }
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/getemployees')//.json?
  }
  getUserById(id:number){
    //console.log('http://127.0.0.1:8000/api/employee/id')
    return this.httpClient.get(`http://127.0.0.1:8000/api/employee/${id}`)    
  }
  delEmployee(id: number) {
    console.log(id)
    return this.httpClient.delete(`http://127.0.0.1:8000/api/employee/${id}`)
  }
  // editEmployee(id:number){
  //   return this.httpClient.get('http://127.0.0.1:8000/api/getemployees')
  // }
  updateEmployee(data:any,id:number) {
    console.log("dataSErvvice",data)
    return this.httpClient.put(`http://127.0.0.1:8000/api/updateemployee/${id}`,data);
  }

  login(data:any){
    console.log(data)
    return this.httpClient.post('http://127.0.0.1:8000/api/login',data)
  }

  //
  getEmpByToken(token:any){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    console.log("Header:",headers);
    return this.httpClient.get('http://127.0.0.1:8000/api/profile', { headers });
  }

  logout(){
    localStorage.removeItem('token');
  }

  // editEmployee(token:any){
  //   const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
  //   console.log("Header:",headers);
  //   return this.httpClient.get('http://127.0.0.1:8000/api/edit', { headers });
  // }
  updateDataEmp(data:any,token:any){
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    console.log("Header:",headers);
    return this.httpClient.put('http://127.0.0.1:8000/api/edit', data,{ headers });
  }
  
  // setToken(token: string) {
  //   this.token = token;
  //   console.log("setToken",this.token)
  // }
  
  // getToken() {
  //   return this.token;
  // }
  
}
