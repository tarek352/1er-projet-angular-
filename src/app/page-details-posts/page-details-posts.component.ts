import { Component, OnInit } from '@angular/core';
import{AffichepostsService} from '../services/afficheposts.service';
import { ActivatedRoute } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-page-details-posts',
  templateUrl: './page-details-posts.component.html',
  styleUrls: ['./page-details-posts.component.css']
})
export class PageDetailsPostsComponent implements OnInit {
dt; 
  constructor(private alt:AffichepostsService,private http: HttpClient,private route:ActivatedRoute) { }

  ngOnInit() {
    this.alt.getdatapostdetail(this.route.snapshot.params.id).subscribe(data=>{
      this.dt= data; 
      console.log(data)
  })
  }
}
