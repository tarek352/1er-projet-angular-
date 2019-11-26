import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AffichepostsService {

  constructor(private _http:HttpClient) { }
  getdata2() { 
    return this._http.get('https://jsonplaceholder.typicode.com/posts')
   }
   getdatapostdetail(id){ 
    return this._http.get('https://jsonplaceholder.typicode.com/comments?postId='+id)
   }
}
