import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AffichageusersService {

  constructor(private http:HttpClient) { }
  getdata() { 
    return this.http.get('https://jsonplaceholder.typicode.com/users')

   }
   getdata1(id){ 
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
   }
   getdatapost(id){ 
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+id)
   }
}
