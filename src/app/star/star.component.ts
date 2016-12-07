import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.sass']
})
export class StarComponent implements OnInit {

  @Input() isFav;
  @Output() makingFav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  makeFav(){
    // this.isFav = false ? this.isFav : this.isFav = true;
    if( this.isFav ){
      this.isFav = false
    }else{
      this.isFav = true;
    };
    this.makingFav.emit( this.isFav )
  }

}
