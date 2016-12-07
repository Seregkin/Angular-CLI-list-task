import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

@Injectable()
export class PostsService {

  constructor(
    private _http: Http
  ) { }

  getPosts( userId? ){
    if( userId ){
      return this._http.get( 'https://jsonplaceholder.typicode.com/posts?userId='+userId )
    }else{
      return this._http.get( 'https://jsonplaceholder.typicode.com/posts' )
    }
  }

}
