import { UserComponent } from './../../../routing/src/app/user/user.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{
  path:'', component:HomeComponent, pathMatch: 'full'
},
{
  path:'home', component:HomeComponent
},
{
  path:'posts', component: PostsComponent
},
{
  path:'posts/:id', component: PostsComponent, pathMatch: 'full'
},
{
  path:'postsBy/:id', component: UserComponent, pathMatch: 'full'
},
{
  path:'comments/:id', component: CommentsComponent, pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
