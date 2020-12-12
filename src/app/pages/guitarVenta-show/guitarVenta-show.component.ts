import { ServiceGuitarsVenta } from '../../sharedServices/service-guitarsVenta';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';








@Component({
  selector: 'app-guitar-show',
  templateUrl: './guitarVenta-show.component.html',
  styleUrls: ['./guitarVenta-show.component.scss']
})
export class GuitarVentaShowComponent implements OnInit {

  id:number;
  guitarras:any[];
  guitarra:any;

  constructor(public servicioGuitars:ServiceGuitarsVenta,public router:ActivatedRoute) { }

  ngOnInit() {
    window.scrollTo(0, 0);


    // console.log(+this.router.snapshot.params.id);
    this.id=+this.router.snapshot.params.id;
    // console.log(this.servicioGuitars.getGuitars());
    this.guitarras=this.servicioGuitars.getGuitarsVenta();
    let _guitarra=this.guitarras.find(elem=>{
      return elem.id===this.id;
    })

    this.guitarra=_guitarra;
    console.log(this.guitarra);
  }

}
