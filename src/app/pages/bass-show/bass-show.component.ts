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
  bass:{};

  constructor(public servicioBasses:ServiceBasses,public router:ActivatedRoute) { }

  ngOnInit() {

    // console.log(+this.router.snapshot.params.id);
    this.id=+this.router.snapshot.params.id;
    console.log(this.servicioBasses.getBasses());
    this.basses=this.servicioBasses.getBasses();
    let _bass=this.basses.filter(elem=>{
      return elem.id===this.id;
    })

    this.bass=_bass[0]
    console.log(this.bass);
  }

}
