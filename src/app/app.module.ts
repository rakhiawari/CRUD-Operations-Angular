import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { PostAddComponent } from './posts/post-add/post-add.component';
import { PostGetComponent } from './posts/post-get/post-get.component';
import { PostEditComponent } from './posts/post-edit/post-edit.component';
import { PostDeleteComponent } from './posts/post-delete/post-delete.component';
import { HomeComponent } from './home/home.component';
import { CommentGetComponent } from './posts/comments/comment-get/comment-get.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentsComponent,
    PostAddComponent,
    PostGetComponent,
    PostEditComponent,
    PostDeleteComponent,
    HomeComponent,
    CommentGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
