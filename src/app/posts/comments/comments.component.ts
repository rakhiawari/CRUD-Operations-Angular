import { ActivatedRoute, Params } from '@angular/router';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  commentsData:any;
  id:string;

  constructor(private postService: PostService,private route:ActivatedRoute) {
    this.commentsData=[];
   }

  ngOnInit() {
    this.route.params.subscribe((params:Params)=>{
      this.id=params['id'];
    });
    this.getAllComments(this.id);
  }

  getAllComments(id){
    this.postService.getCommentsByPostId(this.id).subscribe(response => {
      this.commentsData = response;
    })
  }
}
