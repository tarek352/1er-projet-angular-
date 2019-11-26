import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{AffichageusersService} from '../services/affichageusers.service';
import { ActivatedRoute } from '@angular/router'; 
@Component({
  selector: 'app-page-details-user',
  templateUrl: './page-details-user.component.html',
  styleUrls: ['./page-details-user.component.css']
})
export class PageDetailsUserComponent implements OnInit {
  users; 
  us;
  constructor(private alt:AffichageusersService,private http: HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id); 
    this.alt.getdata1(this.route.snapshot.params.id).subscribe(data=>{
      this.users= data; })
      this.alt.getdatapost(this.route.snapshot.params.id).subscribe(data=>{
        this.us= data; 
        console.log(data)
    })
  }

}
