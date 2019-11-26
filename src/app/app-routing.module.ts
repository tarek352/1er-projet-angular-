import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PostsComponent } from './posts/posts.component'; 
import { PageDetailsUserComponent } from './page-details-user/page-details-user.component'; 
import { PageDetailsPostsComponent} from './page-details-posts/page-details-posts.component'; 
const routes: Routes = [
 { path:'users' , component: UsersComponent },
 { path:'posts' , component: PostsComponent },
 { path:'users/:id', component:PageDetailsUserComponent},
 { path:'posts/:id', component:PageDetailsPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
