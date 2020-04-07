import { ServiceGuitars } from './../../sharedServices/service-guitars';
import { Component, OnInit, OnDestroy } from '@angular/core';








@Component({
  selector: 'app-guitars',
  templateUrl: './guitars.component.html',
  styleUrls: ['./guitars.component.scss']
})

export class GuitarsComponent implements OnInit,OnDestroy {



  guitarsA:Object[];

  constructor(private guitars:ServiceGuitars) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    // console.log(this.guitars.getGuitars());
    this.guitarsA=this.guitars.getGuitars();



    
  };
  
  ngOnDestroy() {
            


  }

}
