import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {

  users;

  constructor(
    private _us: UsersService
  ) { }

  ngOnInit() {
    this._us.getUsers()
      .subscribe( res => {
        this.users = res.json();
      } )
  }

}
