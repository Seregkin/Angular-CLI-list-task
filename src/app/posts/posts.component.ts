import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {

  posts;

  constructor(
    private _ps: PostsService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = +params['id'];
      this._ps.getPosts(id)
        .subscribe( res => {
          this.posts = res.json();
        });
    });
  }

}
