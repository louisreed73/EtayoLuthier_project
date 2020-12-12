import { ServiceGuitarsKlein } from '../../sharedServices/service-guitarsKlein';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';









@Component({
  selector: 'app-guitar-show',
  templateUrl: './guitarKlein-show.component.html',
  styleUrls: ['./guitarKlein-show.component.scss']
})
export class GuitarKleinShowComponent implements OnInit {

  id:number;
  guitarras:any[];
  guitarra:any;

  constructor(public servicioGuitars:ServiceGuitarsKlein,public router:ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);


    // console.log(+this.router.snapshot.params.id);
    this.id= +this.router.snapshot.params.id;
    this.guitarras=this.servicioGuitars.getGuitarsKlein();
    console.log(this.guitarras)
    let _guitarra=this.guitarras.find(elem=>{
      return elem.id===this.id;
    })

    // console.log(_guitarra);
    this.guitarra=_guitarra;  
  }

}
