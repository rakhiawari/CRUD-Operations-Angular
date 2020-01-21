import { PostService } from './../post.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userPosts:any;
  id:number;
  constructor(private postService:PostService,private route: ActivatedRoute) {
    this.userPosts=[];
   }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=params['userId'];
    });
    this.getPostByUserId(this.id);

  }
  getPostByUserId(id){
    this.postService.getPostByUserId(id).subscribe(response=>{
      this.userPosts=response;
    })
  }
}
