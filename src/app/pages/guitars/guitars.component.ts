import { ServiceGuitars } from './../../sharedServices/service-guitars';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.scss']
})
export class GuitarsComponent implements OnInit {

  guitarsA:Object[];

  constructor(private guitars:ServiceGuitars) { }

  ngOnInit() {
    console.log(this.guitars.getGuitars());
    this.guitarsA=this.guitars.getGuitars();
  }

}
