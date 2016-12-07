import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  constructor(
    private _http: Http
  ) { }

  getUsers(){
    return this._http.get('https://jsonplaceholder.typicode.com/users');
  };

  getUser( id ){
    return this._http.get('https://jsonplaceholder.typicode.com/users/'+id);
  }

}
