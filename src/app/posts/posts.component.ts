import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{AffichepostsService} from '../services/afficheposts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: object; 
  constructor(private alt:AffichepostsService,private _http: HttpClient) { }

  ngOnInit() {
    this.alt.getdata2().subscribe(data=>{
      this.posts= data;
      console.log(data);
  })
  }
}
