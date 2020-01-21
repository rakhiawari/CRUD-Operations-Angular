import { Comment } from './comments/comment';
import { Post } from './post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  base_path="http://jsonplaceholder.typicode.com/";
  base_key="posts"

  constructor(private http:HttpClient) { }

  getPosts(): Observable<Post> {
    return this.http.get<Post>(this.base_path+this.base_key);
  }

  getCommentsByPostId(id){
    console.log(id);
    return this.http.get<Comment>(this.base_path+"comments"+"?postId="+id);
  }

  getPostByUserId(id){
    console.log(id);
    return this.http.get<Post>(this.base_path+this.base_key+"?userId="+id);
  }
}
