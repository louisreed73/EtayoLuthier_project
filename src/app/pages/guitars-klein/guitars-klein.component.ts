import { ServiceGuitarsKlein } from './../../sharedServices/service-guitarsKlein';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guitars-klein',
  templateUrl: './guitars-klein.component.html',
  styleUrls: ['./guitars-klein.component.scss']
})
export class GuitarsKleinComponent implements OnInit {


  guitarsK: Object[];

  constructor(private guitars: ServiceGuitarsKlein) { }

  ngOnInit() {
    // console.log(this.guitars.getGuitars());
    this.guitarsK = this.guitars.getGuitarsKlein();




  };

  ngOnDestroy() {



  }

}
