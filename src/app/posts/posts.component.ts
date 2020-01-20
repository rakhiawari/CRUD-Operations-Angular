import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  userPosts:any;
  searchText:any;
  
  constructor(public postService: PostService) {
    this.userPosts=[];
   }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts(){
    this.postService.getPosts().subscribe(response => {
      this.userPosts = response;
    })
  }

}
