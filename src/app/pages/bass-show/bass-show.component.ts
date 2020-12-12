import { ActivatedRoute } from '@angular/router';
import { ServiceBasses } from './../../sharedServices/service-basses';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bass-show',
  templateUrl: './bass-show.component.html',
  styleUrls: ['./bass-show.component.scss']
})
export class BassShowComponent implements OnInit {
  id:number;
  basses:any[];
  bass:any;

  constructor(public servicioBasses:ServiceBasses,public router:ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    // console.log(+this.router.snapshot.params.id);
    this.id=+this.router.snapshot.params.id;
    console.log(this.id)
    this.basses=this.servicioBasses.getBasses();
    let _bass=this.basses.find(elem=>{
      return elem.id===this.id;
    })

    this.bass=_bass;
    console.log(this.bass);
  }

}
