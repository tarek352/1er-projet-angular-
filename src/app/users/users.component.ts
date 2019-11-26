import { Component, OnInit } from '@angular/core';
import{AffichageusersService} from '../services/affichageusers.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: object ; 
posts: object; 
  constructor(private alt:AffichageusersService,private http: HttpClient) { }

  ngOnInit() {
    this.alt.getdata().subscribe(data=>{
      this.users= data;
      console.log(data);
  })
  }

}
