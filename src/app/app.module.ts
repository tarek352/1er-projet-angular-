import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AffichageusersService} from './services/affichageusers.service';
import{AffichepostsService} from './services/afficheposts.service';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component';
import { PageDetailsUserComponent } from './page-details-user/page-details-user.component'; 
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { PageDetailsPostsComponent } from './page-details-posts/page-details-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    PostsComponent,
    PageDetailsUserComponent,
    PageDetailsPostsComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AffichageusersService,AffichepostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
