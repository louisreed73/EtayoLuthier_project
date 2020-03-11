import { ServiceGuitarsKlein } from '../../sharedServices/service-guitarsKlein';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';








@Component({
  selector: 'app-guitar-show',
  templateUrl: './guitar-show.component.html',
  styleUrls: ['./guitar-show.component.scss']
})
export class GuitarKleinShowComponent implements OnInit {

  name:string;
  guitarras:any[];
  guitarra:any;

  constructor(public servicioGuitars:ServiceGuitarsKlein,public router:ActivatedRoute) { }

  ngOnInit() {

    // console.log(+this.router.snapshot.params.id);
    this.name=this.router.snapshot.params.name;
    // console.log(this.servicioGuitars.getGuitars());
    this.guitarras=this.servicioGuitars.getGuitarsKlein();
    let _guitarra=this.guitarras.filter(elem=>{
      return elem.name===this.name;
    })

    this.guitarra=_guitarra[0];
    console.log(this.guitarra);
  }

}
