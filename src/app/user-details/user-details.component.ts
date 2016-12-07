import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Params }   from '@angular/router';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers: [UsersService]
})
export class UserDetailsComponent implements OnInit {

  user;

  constructor(
    private _us: UsersService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      let id = +params['id'];
      this._us.getUser(id)
        .subscribe( res => {
          this.user = res.json();
        });
    });
  }

}
