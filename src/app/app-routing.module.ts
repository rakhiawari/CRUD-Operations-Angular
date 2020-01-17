import { CommentGetComponent } from './posts/comments/comment-get/comment-get.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostGetComponent } from './posts/post-get/post-get.component';
import { HomeComponent } from './../../../routing/src/app/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path:'', component:HomeComponent, pathMatch: 'full'
},
{
  path:'home', component:HomeComponent
},
{
  path:'posts', component: PostGetComponent
},
{
  path:'posts/:id', component: PostGetComponent, pathMatch: 'full'
},
{
  path:'posts/:id/comments', component: CommentGetComponent, pathMatch: 'full'
},
{
  path:'post/newpost', component: PostAddComponent, pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
